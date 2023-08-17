import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Container } from '@mui/material'
import './index.css'

import Home from './components/Home/home'
import Auth from './components/Auth/auth'
import Layout from './components/Layout/layout'

const App = () => {
    return(
        <GoogleOAuthProvider clientId={'622946920465-qeni21jn7p07ipru9h6k0pnin5jd60u0.apps.googleusercontent.com'}>
            <Router>
                <Container maxWidth="lg">
                    <Routes>
                        <Route path='/' exact element={<Layout />}>
                            <Route path='/' exact element={<Home />}/>
                        </Route>
                        <Route path='/auth' exact element={<Auth />}/>
                    </Routes>
                </Container>
            </Router>
        </GoogleOAuthProvider>
    )
}

export default App