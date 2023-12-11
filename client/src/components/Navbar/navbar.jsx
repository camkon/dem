import { Logout } from "@mui/icons-material"
import { AppBar, Avatar, Box, Button, IconButton, Typography } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { LOGOUT } from "../../constants/actionTypes"
import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const handleLogout = () => {
    dispatch({type: LOGOUT})
    navigate('/auth')
  }

  return (
    <Box position="static" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0.75rem 0.75rem 1rem', borderRadius: '0.5rem', background: '#fff', margin: '1rem 0'}}>
        <Typography color="primary" align='center'>SOCIAL MEDIA APP</Typography>
        <Box>
        {user 
          ? (<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', columnGap: '0.5rem'}}>
              <Typography sx={{marginRight: {xs: 0, md: '1rem'}}}>{user?.result?.name}</Typography>
              <Avatar sx={{height: 30, width: 30}} src={user?.result?.picture}/>
              <IconButton onClick={handleLogout}><Logout fontSize="small"/></IconButton>
            </Box>) 
          : (<Button variant="contained">Sign In</Button>)
        }
        </Box>
    </Box>
  )
}

export default Navbar
