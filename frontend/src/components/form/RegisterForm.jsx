import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../services/api/apiService.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import facebookLogo from "../../assets/imgs/facebook.png";
import googleLogo from "../../assets/imgs/google.png";

import "../../styles/form/RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  // handle toggle password
  const toggle = () => {
    setOpen(!open);
  };

  const [checkBox, setCheckBox] = useState(false);
  const [registrationrError, setRegistrationError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed_password, setconfirmedPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    setRegistrationError(null);
    if (email == "") {
      setRegistrationError("Please input email.");
    } else if (password == "") {
      setRegistrationError("Please input password.");
    }
    // Handle password and confirmedPassword don't match
    else if (password != confirmed_password) {
      setRegistrationError("Confirm password do not match. Please type again.");
    } else if (!checkBox) {
      setRegistrationError("Please agree to Privacy Policy to register.");
    } else {
      try {
        const response = await registerUser(email, password); // Use await to wait for the promise
        console.log("Got response:", response);
        // Navigate to login page
        // navigate("/login");
      } catch (error) {
        if (error.response.status === 409) {
          setRegistrationError("Email already in use. Please choose a different email.");
        } else {
          setRegistrationError("An error occurred. Please try again later.");
        }
        console.error(error);
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-back">
        <a href="" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Back to website</span>
        </a>
      </div>

      <h1 className="register-title">Hello New Friend!</h1>

      <div className="register-new-account">
        <span>Already have an account? </span>
        <a href="" onClick={() => navigate("/login")}>
          Sign in
        </a>
      </div>

      {/* Register Form */}
      <form action="" className="register-form">
        {/* Email Input */}
        <label className="register-form-label" htmlFor="">
          Email
        </label>
        <input
          className="register-form-input"
          type="email"
          name=""
          id=""
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <label className="register-form-label" htmlFor="password">
          Password
        </label>
        <div className="register-form-password-container">
          <input
            className="register-form-input"
            type={open === false ? "password" : "text"}
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Toggle visible */}
          <div className="register-form-password-toggle">
            {open === false ? (
              <FontAwesomeIcon icon={faEyeSlash} onClick={toggle} />
            ) : (
              <FontAwesomeIcon icon={faEye} onClick={toggle} />
            )}
          </div>
        </div>

        {/* Confirm password input */}
        <label className="register-form-label" htmlFor="confirm-password">
          Confirm Password
        </label>
        <div className="register-form-password-container">
          <input
            className="register-form-input"
            type={open === false ? "password" : "text"}
            name="confirm-password"
            id="confirm-password"
            placeholder="Enter your password again"
            onChange={(e) => setconfirmedPassword(e.target.value)}
          />

          {/* Toggle visible */}
          <div className="register-form-password-toggle">
            {open === false ? (
              <FontAwesomeIcon icon={faEyeSlash} onClick={toggle} />
            ) : (
              <FontAwesomeIcon icon={faEye} onClick={toggle} />
            )}
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="register-privacy-policy">
          <input
            type="checkbox"
            name="privacy-checkbox"
            id="privacy-checkbox"
            onChange={() => setCheckBox(!checkBox)}
          />
          <label htmlFor="privacy-checkbox">
            I agree to the <a href="">Privacy Policy</a>.
          </label>
        </div>

        {/* Submit Button */}
        <div className="register-form-submit">
          <button onClick={handleRegister}>Submit</button>
        </div>

        {/* Show Register Error */}
        {<p className="register-show-error">{registrationrError}</p>}

        {/* Divider Horizontal Line */}
        <div className="register-form-divider">
          <div className="register-form-divider-line"></div>
          <div className="register-form-divider-text">OR</div>
          <div className="register-form-divider-line"></div>
        </div>

        {/* Other Login Methods */}
        <div className="register-form-methods">
          {/* Login with Chrome */}
          <a href="">
            <img src={googleLogo} alt="Google Logo" width={40} height={40} />
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

export default RegisterForm;
