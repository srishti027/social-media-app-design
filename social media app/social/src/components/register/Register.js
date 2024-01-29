import './register.css'

export default function Register() {
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
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email-Address" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into your Account</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
