import "./leftLock.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const LeftLock = () => {
  const [active, setActive] = useState("signIn");

  if (sessionStorage.getItem("user") === null) {
    sessionStorage.setItem("user", "signIn");
  }

  console.log("first", active);
  return (
    <div className="parent">
      <div className="lockParent">
        <div className="LockDisplay">
          <div className="lockBox">
            <div className="lockImage">
              <img src={require("../../../assets/images/logo.png")} />
            </div>
            <div className="lockMinImage">
              <img src={require("../../../assets/images/logo-2.png")} />
            </div>
            <h4 className="lockBoxText">
              Protect & Manage every password in your business
            </h4>
            <div className="tabsContainer">
              <div className="signInTab">
                <Link
                  to="/signin"
                  className={
                    sessionStorage.getItem("user") === "signIn"
                      ? "linkToSign selected"
                      : "linkToSign "
                  }
                  onClick={() => {
                    sessionStorage.setItem("user", "signIn");
                  }}
                >
                  SIGN-IN
                </Link>
              </div>
              <div className="signUpTab">
                <Link
                  to="/signup"
                  className={
                    sessionStorage.getItem("user") === "signUp"
                      ? "linkToSign selected"
                      : "linkToSign "
                  }
                  onClick={() => {
                    sessionStorage.setItem("user", "signUp");
                  }}
                >
                  SIGN-UP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftLock;
