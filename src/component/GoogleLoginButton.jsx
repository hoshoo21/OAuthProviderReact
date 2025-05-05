import React from "preact/compat";
import { GoogleLogin,useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const GoogeLoginButton =(props)=>{
    const navigate = useNavigate();
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
          try {
            const accessToken = tokenResponse.access_token;
    
            // ✅ Fetch user info from Google API
            const res = await axios.get(
              'https://www.googleapis.com/oauth2/v3/userinfo',
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
    
            const userData = res.data;
            console.log('User Info:', userData);
    
            localStorage.setItem('user', JSON.stringify(userData));
    
            navigate('/profile');
          } catch (err) {
            console.error('Failed to fetch user info', err);
          }
        },
        onError: () => console.log('Login Failed'),
      });
    
    return (

     <div className="flex  justify-end items-end h-screen pb-20"  >   
     <button
      onClick={() => login()}
      className="w-12 h-12 rounded-full bg-white shadow border border-gray-300 flex items-center justify-center hover:shadow-md transition"
    >
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google Logo"
        className="w-6 h-6"
      />
  </button>     
  </div>
    )

}

export default GoogeLoginButton;