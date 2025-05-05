import React from "react";


import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogeLoginButton from './component/GoogleLoginButton';
const LoginPage =(props)=>{
    
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    console.log(clientId);
    return (
    

            <GoogleOAuthProvider clientId={clientId}>
                <GoogeLoginButton />
            </GoogleOAuthProvider>
            
   );
    
    
}

export default LoginPage;