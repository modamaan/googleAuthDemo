
import { GoogleLogin } from 'react-google-login';
import './App.css';
import Home from './components/Home';

function App() {

  const responseGoogle = (response) => {
    console.log("hello");
    // Handle the Google response here
  };
  return (
    <div>
    <GoogleLogin
      clientId="CLIENT_ID"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  </div>
  );
}

export default App;

