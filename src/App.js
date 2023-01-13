import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="text">
          SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT,
        </div>
      </div>
      <div className="container">
        <span className="buttons">
          <button className="login">Login</button>
          <button className="signUp">Signup</button>
        </span>
        <span>
          {" "}
          <hr className="hrLine1" size="4" color=" #FF1493" />
          {/* <hr className="hrLine2" size="4" color=" #FF1493" /> */}
        </span>
      </div>

      <div className="loginInput">
        <div>
          <input
            type="email"
            className="loginInputField"
            placeholder="    Email Address"
          />
        </div>
        <div>
          <input
            type="password"
            className="loginInputField"
            placeholder="     Password"
          />
        </div>
        <div>
          <input type="submit" className="submit " value="LOGIN" />
        </div>
        <div>
          <label>
            <a href="https://www.google.com/" className="fPassword">
              Forgot Password?
            </a>
          </label>
        </div>
        <p className="loginWith">or login with</p>

        <div className="icons">
            <ul>
                <li> <a href="https://www.google.com/"><img src="icons8-google-48.png" className="googleSvg" alt="logo"  /></a> </li>
                <li><a href="https://www.google.com/"><img src="facebook.svg" className="facebookSvg" alt="logo" /></a> </li>
                <li><a href="https://www.google.com/"><img src="twitter-svgrepo-com.svg" className="twitterSvg" alt="logo"  /></a></li>
            </ul>
            </div>
         <span className="accountOpen"><p>Dont't have an account?<a href="https://www.google.com/"> Create new now!</a></p></span>
         <span className="terms"><p>By singning up, you are agree with our<a href="https://www.google.com/"> Terms & Condition</a></p></span>
      </div>
    </div>
  );
}

export default App;
