import { Logout } from "@mui/icons-material"
import { AppBar, Avatar, Box, Button, IconButton, Typography } from "@mui/material"

const Navbar = () => {

  const user = null

  return (
    <Box position="static" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0.75rem 0.75rem 1rem', borderRadius: '0.5rem', background: '#fff', margin: '1rem 0'}}>
        <Typography color="primary" align='center'>SOCIAL MEDIA APP</Typography>
        <Box>
        {user 
          ? (<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', columnGap: '0.75rem'}}>
              <Typography>Ansaf Nisam</Typography>
              <Avatar />
              <IconButton><Logout /></IconButton>
            </Box>) 
          : (<Button variant="contained">Sign In</Button>)
        }
        </Box>
    </Box>
  )
}

export default Navbar
