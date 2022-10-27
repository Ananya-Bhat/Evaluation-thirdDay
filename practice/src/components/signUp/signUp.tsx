import "./signUp.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState(false);

  const togglePassword = () => {
    setPassword(!password);
  };

  const previousUsers = localStorage.getItem("users") || "[]";
  if (previousUsers === "[]") {
    localStorage.setItem("users", JSON.stringify([]));
  }

  const signUpHandler = (e: any) => {
    e.preventDefault();

    const mobileNumber = e.target.mobileNo.value;
    const mpin = e.target.mpin.value;
    const confirmMPin = e.target.confirmMPin.value;

    const userData = {
      mobileNumber,
      mpin,
      confirmMPin,
    };

    const previousData = JSON.parse(localStorage.getItem("users") || "[]");
    console.log(previousData);

    const arr: any[] = [];
    previousData.map((user: any) => {
      if (userData.mobileNumber === user.mobileNumber) {
        arr.push("exist");
      }
    });

    if (arr.includes("exist")) {
      alert("User already exist");
    } else {
      if (
        userData.mobileNumber !== "" &&
        userData.mpin !== "" &&
        userData.confirmMPin !== ""
      ) {
        if (userData.mpin === userData.confirmMPin) {
          previousData.push(userData);
          localStorage.setItem("users", JSON.stringify(previousData));
          localStorage.setItem(
            JSON.stringify(mobileNumber),
            JSON.stringify([])
          );
          navigate("/");
          window.location.reload();
        } else {
          alert("Wrong Password");
        }
      } else {
        alert("Enter all fields");
      }
    }
  };

  return (
    <div className="lockContainer">
      <div className="form">
        <div className="signUp">SIGN UP</div>
        <form className="formContainer" onSubmit={signUpHandler}>
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

          <div className="mobile">
            <input
              type="text"
              name="mpin"
              id="mobile"
              className="input"
              placeholder=" Enter 4 Digit MPin "
              minLength={4}
              maxLength={4}
            />
          </div>

          <div className="mPin">
            <input
              type={password === true ? "text" : "password"}
              name="confirmMPin"
              id="mPin"
              className="input"
              placeholder="Re-Enter 4 Digit MPin"
              minLength={4}
              maxLength={4}
            />
            <img
              src={require("../../assets/images/eye_on.png")}
              alt="eye"
              className="toggleEye"
              onClick={togglePassword}
            />
          </div>
          <div className="bottomDisplay">
            <div className="button">
              <input type="submit" value="SIGN UP" className="signUpText" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
