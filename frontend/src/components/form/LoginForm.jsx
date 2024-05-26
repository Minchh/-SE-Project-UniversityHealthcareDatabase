import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {loginGoogle, loginUser } from "../../services/api/apiService.js";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

// images
import facebookLogo from "../../assets/imgs/facebook.png";
import googleLogo from "../../assets/imgs/google.png";

// styles
import "../../styles/form/LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleRedirect = (link) => {
    window.location.href = link; // Replace with your desired URL
  };

  const [open, setOpen] = useState(false);

  // handle toggle password
  const toggle = () => {
    setOpen(!open);
  };

  const [loginError, setLoginError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle login
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginError(null);
    if (email === "") {
      setLoginError("Please input email.");
    } else if (password === "") {
      setLoginError("Please input password.");
    } else {
      loginUser(email, password)
        .then((response) => {
          if (response.status === 200) {
            const token = response.data.token;
            localStorage.setItem("token", token);
            // Navigate to thhe home page
            navigate("/")
          } else {
            setLoginError("Login failed. Please check your credentials.");
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            setLoginError("Invalid credentials");
          } else if (error.response.status === 500) {
            setLoginError("Internal server error");
          } else {
            setLoginError("Invalid credentials");
          }
          console.error(error);
        });
    }
  };

  async function auth(event){
    event.preventDefault();
    // const response =await fetch('http://localhost:5001/request',{method:'post'});
    loginGoogle()
        .then((response) => {
          console.log(response.data);
          const data = response.data;
          handleRedirect(data.url);
        }) 
        .catch((error) => {
          setLoginError("Invalid credentials");
          console.error(error);
        });
      
    // const data = await response.json();
    // console.log(data);
    // navigate(data.url);
  
  }

  return (
    <div className="login-container">
      <div className="login-back">
        <a href="" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Back to website</span>
        </a>
      </div>

      <h1 className="login-title">Welcome Back!</h1>

      <div className="login-new-account">
        <a href="" onClick={() => navigate("/register")}>
          Create an account
        </a>
        <span> or log in to get started...</span>
      </div>

      {/* Login Form */}
      <form action="" className="login-form">
        {/* Email Input */}
        <label className="login-form-label" htmlFor="email">
          Email
        </label>
        <input
          className="login-form-input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          required
        />

        {/* Password Input */}
        <label className="login-form-label" htmlFor="password">
          Password
        </label>
        <div className="login-form-password-container">
          <input
            className="login-form-input"
            type={open === false ? "password" : "text"}
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Toggle visible */}
          <div className="login-form-password-toggle">
            {open === false ? (
              <FontAwesomeIcon icon={faEyeSlash} onClick={toggle} />
            ) : (
              <FontAwesomeIcon icon={faEye} onClick={toggle} />
            )}
          </div>
        </div>

        {/* Forgot password */}
        <div className="login-form-forgot">
          <a href="">
            <span>Forgot Password?</span>
          </a>
        </div>

        {/* Submit Button */}
        <div className="login-form-submit">
          <button onClick={handleLogin}>Submit</button>
        </div>

        {/* Show Login Error */}
        {loginError && <p className="login-show-error">{loginError}</p>}

        {/* Divider Horizontal Line */}
        <div className="login-form-divider">
          <div className="login-form-divider-line"></div>
          <div className="login-form-divider-text">OR</div>
          <div className="login-form-divider-line"></div>
        </div>

        {/* Other Login Methods */}
        <div className="login-form-methods">
          {/* Login with Chrome */}
          <a href="">
            <img src={googleLogo} alt="Google Logo" width={40} height={40} onClick={auth}/>
          </a>

          {/* Login with Facebook */}
          <a href="">
            <img src={facebookLogo} alt="Facebook Logo" width={40} height={40} />
          </a>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
