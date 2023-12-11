import { Avatar, Box, Button, Container, Divider, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Input from '../Mui/input'
import {GoogleLogin} from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import {AUTH} from '../../constants/actionTypes'

const Auth = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isSignUp, setIsSignUp] = useState(true)
  const [data, setData] = useState({})

  const handleForm = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    console.log(data)
  }

  const handleLogIn = (e) => {
    e.preventDefault()
    console.log(data)
  }

  const switchModes = () => {
    setIsSignUp(!isSignUp)
  }

  const handleGoogleLogin = async (res) => {
    const result = jwtDecode(await res?.credential)
    const token = res?.credential
    try {
      dispatch({type: AUTH, payload: {result, token}})
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleGoogleLoginError = async (err) => {
    console.log(err)
  }

  return (
    <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%'}}>
        <Paper sx={{height: 'auto', width: '25rem', padding: '1rem 1.5rem 2rem 1.5rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', rowGap: '0.5rem'}}>
            <Avatar />
            <Typography>{isSignUp ? 'Sign Up' : 'Log In'}</Typography>
            {
              isSignUp ? (
                <form action={handleSignUp} style={{marginTop: '1rem', width: '100%'}}>
                  <Grid container spacing={2}>
                    <Input name="firstname" label="First Name" onChange={handleForm} half={true}/>
                    <Input name="lastname" label="Last Name" onChange={handleForm} half={true}/>
                    <Input name="email" label="Email" onChange={handleForm}/>
                    <Input name="phone" label="Phone Number" onChange={handleForm}/>
                    <Input name="password" label="Password" onChange={handleForm} type='password'/>
                    <Input name="confirmPassword" label="Confirm Password" onChange={handleForm} type='password'/>
                    <Grid item xs={12}><Button type='submit' variant="contained" fullWidth sx={{padding: '0.75rem 0'}}>Sign Up</Button></Grid>
                  </Grid>
                </form>
               ) : (
                 <form action={handleLogIn} style={{display: 'flex', flexDirection: 'column', rowGap: "1rem", width: "100%", marginTop: '1rem'}}>
                  <Grid container spacing={2}>
                    <Input name="email" label="Email" onChange={handleForm}/>
                    <Input name="password" label="Password" onChange={handleForm}/>
                    <Grid item xs={12}><Button type='submit' variant="contained" fullWidth sx={{padding: '0.75rem 0'}}>Log In</Button></Grid>
                  </Grid>
                </form>
              )
            }
            <Grid container>
              <Grid item xs={12}><Divider>or</Divider></Grid>
            </Grid>
              <GoogleLogin
                size='large'
                width={500}
                logo_alignment='center'
                onSuccess={handleGoogleLogin}
                onError={handleGoogleLoginError}
              />
            <Link onClick={switchModes} sx={{marginTop: '1.5rem', cursor: 'pointer'}}>{isSignUp ? 'Already have an account! Log In' : "Don't have an account! Sign Up"}</Link> 
        </Paper>
    </Container>
  )
}

export default Auth
