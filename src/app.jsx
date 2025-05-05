import './app.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogeLoginButton from './component/GoogleLoginButton';
export function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  console.log(clientId);
  return (
    <GoogleOAuthProvider clientId={clientId}>
        <GoogeLoginButton />
    </GoogleOAuthProvider>
    
  )
}
