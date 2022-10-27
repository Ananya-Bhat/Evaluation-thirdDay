import './topBar.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {

    const navigate = useNavigate();

    const [profile, setProfile] = useState(false);

    return (
        <div className="topBar" >
            <div className="topBarContents">
                <div className="topBarLogo">
                    <img src={require('../../assets/images/pass_logo.png')} alt="pass logo" />
                </div>
                <div className="topBarOptions">
                    <div className="profileSync">
                        <img src={require('../../assets/images/sync.png')} alt="Sync" />
                    </div>
                    <div className="profile">
                        <img src={require('../../assets/images/profile.png')} alt="Profile" onClick={() => { setProfile(!profile); }} />
                        {profile ? (
                            <div className="profileContents">
                                <div className="changePassword bottomLine">
                                    <div className="changePwText">Change Password</div>
                                    <img src={require('../../assets/images/change_pass.png')} alt="change Password" />
                                </div>
                                <div className="changePassword"
                                    onClick={() => {
                                        localStorage.removeItem('Authorised');
                                        navigate('/');
                                        window.location.reload();
                                    }}>
                                    <div className="changePwText">Sign Out</div>
                                    <img src={require('../../assets/images/logout.png')} alt="sign out" />
                                </div>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>

                </div>
            </div>
        </div >
    )
}

export default TopBar