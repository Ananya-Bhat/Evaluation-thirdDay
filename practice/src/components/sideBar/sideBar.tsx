import './sideBar.css'

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="sideBarContainer">
                <div className="burgerMenuIcon">
                    <img
                        src={require('../../assets/images/burger_menu.png')}
                        alt="burger menu"
                    />
                </div>
                <div className="homeIcon">
                    <img
                        src={require('../../assets/images/home_icn.png')}
                        alt="home icon"
                    />
                    <div className="iconActive"></div>
                </div>
            </div>
        </div>
    )
}

export default SideBar