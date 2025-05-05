import React from 'react'
import Navbar from './component/Navbar'

const Profile = () => {
    console.log(JSON.parse( localStorage.getItem('user')));
    const userObj = JSON.parse(localStorage.getItem('user'));
  
  return (
    <div>Helllo {userObj.name} </div>
  )
}

export default Profile