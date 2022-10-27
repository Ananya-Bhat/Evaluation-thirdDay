import LeftLock from "../../components/login/leftLock/leftLock"
import Login from "../../components/login/loginForm/login"
import SignUp from "../../components/signUp/signUp"
import './registerPage.css'

const RegisterPage = () => {
    return (
        <div className="container">
            <div className="registerPage">
                <div>
                    <LeftLock />
                </div>
                <div>
                    <SignUp />
                </div>
            </div>
        </div>
    )
}

export default RegisterPage