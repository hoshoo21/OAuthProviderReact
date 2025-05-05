import { Routes, Route } from 'react-router-dom'
import './app.css'
import LoginPage from './LoginPage'
import Profile from './Profile'
import Home from './Home'
import Navbar from './component/Navbar'
export function App() {


  return(
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/home" element={<Home />}/>
 
          <Route path="/profile" element={<Profile />} />
        </Routes>

    </>
    
    )
}
