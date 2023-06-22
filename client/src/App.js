import { useEffect, useState } from 'react'
import { AppBar, Container, Grid, Grow, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import './index.css'

import { getPosts } from './actions/posts'
import Posts from './components/Posts/posts'
import Form from './components/Form/form'

const App = () => {

    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return(
        <Container maxWidth="lg">
            <AppBar position="static" sx={{padding: '0.5rem', borderRadius: '0.5rem', background: '#fff', margin: '1rem 0'}}>
                <Typography color="primary" align='center'>SOCIAL MEDIA APP</Typography>
            </AppBar>
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
        </Container>
    )
}

export default App