import { useEffect, useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({currentId, setCurrentId}) => {

    const dispatch = useDispatch()
    const post = useSelector((state) => currentId ? state.posts.find((item) => item._id === currentId) : null)
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId !== null) {
            dispatch(updatePost(currentId, postData))
            setCurrentId(null)
        }else dispatch(createPost(postData))
        clearFrom()
    };
    
    const clearFrom = () => {setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''}); setCurrentId(null)};

    return (
        <Paper sx={{padding: '0.5rem 1rem 1rem 1rem', borderRadius: '0.5rem'}}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', rowGap: '0.5rem'}}>
                <Typography align="center" variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    size="small"
                    label="Creator"
                    fullWidth
                    value={postData?.creator}
                    onChange={(e) => {
                        setPostData({ ...postData, creator: e.target.value });
                    }}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    size="small"
                    label="Title"
                    fullWidth
                    value={postData?.title}
                    onChange={(e) => {
                        setPostData({ ...postData, title: e.target.value });
                    }}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    size="small"
                    label="Message"
                    fullWidth
                    value={postData?.message}
                    onChange={(e) => {
                        setPostData({ ...postData, message: e.target.value });
                    }}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    size="small"
                    label="Tags"
                    fullWidth
                    value={postData?.tags}
                    onChange={(e) => {
                        setPostData({ ...postData, tags: e.target.value });
                    }}
                />
                <div>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem', columnGap: '1rem'}}>
                    <Button onClick={handleSubmit} variant="contained" fullWidth>{currentId ? 'Update' : 'Post'}</Button>
                    <Button onClick={clearFrom} variant="contained" color="error" size="small">Reset</Button>
                </Box>
            </form>
        </Paper>
    );
};

export default Form;
