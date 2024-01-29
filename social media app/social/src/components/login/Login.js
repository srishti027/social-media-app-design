import './login.css'

export default function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">
            ConnectWave
          </h3>
          <span className="loginDesc">
            Connect with Friends and the world around you on ConnectWave.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email-Address" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create a New Account</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
