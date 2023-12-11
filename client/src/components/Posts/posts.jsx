import { Box, CircularProgress, Grid } from "@mui/material"
import { useSelector } from 'react-redux'
import Post, { PostSkelton } from "./Post/post"

const Posts = ({setCurrentId}) => {

    const posts = useSelector(state => state.posts)

    return(
        !posts?.length ? (<Grid container spacing={3}>
            {[1,2,3,4,5,6].map(item => (
                <Grid item key={item} xs={12} sm={6}>
                    <PostSkelton />
                </Grid>
            ))}
        </Grid>) : (
            <Grid container spacing={3}>
                {posts.map(item => (
                    <Grid item key={item?._id} xs={12} sm={6}>
                        <Post data={item} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts