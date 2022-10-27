import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState(false);

  const togglePassword = () => {
    setPassword(!password);
  };

  const loginHandler = (e: any) => {
    e.preventDefault();

    const mobileNumber = e.target.mobileNo.value;
    const mPin = e.target.mPin.value;

    const userData = {
      mobileNumber,
      mPin,
    };

    const previousUsers = JSON.parse(localStorage.getItem("users") || "[]");
    console.log(previousUsers);

    if (mobileNumber !== "" && mPin !== "") {
      for (let i = 0; i < previousUsers.length; i++) {
        if (previousUsers[i].mobileNumber === userData.mobileNumber) {
          if (previousUsers[i].mpin === userData.mPin) {
            localStorage.setItem("Authorised", "true");
            localStorage.setItem("currentUser", JSON.stringify(mobileNumber));
            navigate("/dashboard");
            window.location.reload();
          } else {
            alert("Wrong password");
          }
        }
      }
    } else {
      alert("Enter all fields");
    }
  };

  return (
    <div className="lockContainer">
      <div className="form">
        <div className="signIn">SIGN IN TO YOUR ACCOUNT</div>
        <form className="formContainer" onSubmit={loginHandler}>
          <div className="mobile">
            <label htmlFor="mobile">
              <input
                type="text"
                name="mobileNo"
                id="mobile"
                className="input"
                placeholder=" Mobile Number "
                minLength={10}
                maxLength={10}
              />
            </label>
          </div>
          <div className="mPin">
            <input
              type={password === true ? "text" : "password"}
              name="mPin"
              id="mPin"
              className="input"
              placeholder="MPin"
              minLength={4}
              maxLength={4}
            />
            <img
              src={require("../../../assets/images/eye_on.png")}
              alt="eye"
              className="toggleEye"
              onClick={togglePassword}
            />
          </div>
          <div className="bottomDisplay">
            <div className="ForgotPassword">Forgot your Password?</div>
            <div className="button">
              <input type="submit" value="SIGN IN" className="signInText" />
            </div>
            <div className="reg">
              Don't have a Account?{" "}
              <Link to="/signUp" className="link">
                SIGN UP
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
