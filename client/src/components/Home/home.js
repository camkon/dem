import { Container, Grid, Grow } from "@mui/material"
import Posts from "../Posts/posts"
import Form from "../Form/form"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getPosts } from "../../actions/posts"
import Navbar from "../Navbar/navbar"

const Home = () => {

    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return(
        <Grow in sx={{padding: {sx: 0, md: 0}}}>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch">
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{marginTop: {xs: '1.5rem', md: 0}}}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home