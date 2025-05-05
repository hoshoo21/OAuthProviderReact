import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
   const profilePicUrl = 'https://i.pravatar.cc/40'; // or use image from Google login
  return (
    
    <nav className="bg-blue-600 text-white px-6 py-4 shadow flex justify-between items-center">
    <Link to="/" className="text-2xl font-bold">MyApp</Link>
    <div className="flex items-center space-x-4">
      <Link to="/" className="hover:text-gray-200">Home</Link>
      <Link to="/profile" className="hover:text-gray-200">Profile</Link>
      <img
       // src={profileImage}
        alt="profile"
        className="w-10 h-10 rounded-full border-2 border-white"
      />
    </div>
  </nav>

);
}

export default Navbar;