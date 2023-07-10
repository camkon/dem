import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Skeleton, Typography } from "@mui/material"
import moment from 'moment'
import { Delete, MoreHoriz, ThumbUp } from '@mui/icons-material'

const Post = ({data, setCurrentId}) => {

    const deletePost = () => {}

    return(
        <Card sx={{borderRadius: '0.5rem'}}>
            <Box sx={{position: 'relative'}}>
                <img src={data?.selectedFile} alt={data?.title} style={{objectFit: 'contain', height: 'auto', width: '100%'}}/>
                <Box sx={{position: 'absolute', top: 0, width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', boxSizing: 'border-box', color: '#fff'}}>
                    <Box sx={{margin: '0.75rem 1rem'}}>
                        <Typography variant="h6" fontSize='1rem'>{data?.creator}</Typography>
                        <Typography variant="body2" fontSize='0.8rem'>{moment(data?.createdAt).fromNow()}</Typography>
                    </Box>
                    <IconButton sx={{margin: '0.5rem'}} size="small" onClick={() => setCurrentId(data?._id)}><MoreHoriz sx={{color: '#fff'}}/></IconButton>
                </Box>
            </Box>

            <Box sx={{padding: '0.5rem 1rem'}}>
                <Typography sx={{color: 'grey', fontSize: '0.8rem'}}>
                    {data?.tags?.map(item => <span style={{marginRight: '0.25rem'}}>#{item}</span>)}
                </Typography>
            </Box>
            
            <CardContent sx={{padding: '0.25rem 1rem'}}>
                <Typography>{data?.message}</Typography>
            </CardContent>
            
            <CardActions sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem 0.75rem 1rem'}}>
                <Button size="small" sx={{columnGap: '0.5rem'}}><ThumbUp fontSize="0.9rem"/>Like {data?.likeCount}</Button>
                <Button onClick={deletePost} size="small" sx={{columnGap: '0.5rem'}}><Delete fontSize="0.9rem"/>Delete</Button>
            </CardActions>
        </Card>
    )
}

export default Post


export const PostSkelton = () => {

    return(
        <Card sx={{borderRadius: '0.5rem', background: '#ccc'}}>
            <Box sx={{position: 'relative', height: '12rem', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Box sx={{width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', boxSizing: 'border-box', color: '#fff'}}>
                    <Box sx={{margin: '1rem 1rem'}}>
                        <Skeleton animation="wave" variant="rounded" height="1rem" width="5rem" sx={{marginBottom: '0.5rem'}}/>
                        <Skeleton animation="wave" variant="rounded" height="0.75rem" width="3rem"/>
                    </Box>
                    <IconButton sx={{margin: '0.5rem'}} size="small"><MoreHoriz sx={{color: '#aaa'}}/></IconButton>
                </Box>
            </Box>
            
            <CardContent sx={{padding: '1rem 1rem 0.25rem 1rem'}}>
                <Skeleton animation="wave" variant="rounded" height="5rem" width="100%"/>
            </CardContent>
            
            <CardActions sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem 1rem 1rem'}}>
                <Skeleton animation="wave" variant="rounded" height="1.5rem" width="5rem"/>
                <Skeleton animation="wave" variant="rounded" height="1.5rem" width="5rem"/>
            </CardActions>
        </Card>
    )
}

