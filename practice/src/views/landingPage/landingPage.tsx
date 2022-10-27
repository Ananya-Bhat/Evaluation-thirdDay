import LeftLock from "../../components/login/leftLock/leftLock"
import Login from "../../components/login/loginForm/login"
import SignUp from "../../components/signUp/signUp"
import './landingPage.css'

const LandingPage = () => {
    return (
        <div className="container">
            <div className="landingPage">
                <div className="lockContainer">
                    <LeftLock />
                </div>
                <div>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LandingPage