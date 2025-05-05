import React from "preact/compat";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
const GoogeLoginButton =(props)=>{
    return (
        <GoogleLogin
            onSuccess={credentialResponse =>{
                const decoded = jwt_decode(credentialResponse.credential);

            }}
            onError = {()=>{
                console.log('Login Failed');
             }}
        />
            
      
    )

}

export default GoogeLoginButton;