import MainBody from "../../components/mainBody/mainBody";
import SideBar from "../../components/sideBar/sideBar";
import TopBar from "../../components/topBar/topBar";
import "./dashBoard.css";

const DashBoard = () => {
  return (
    <div className="dashBoard">
      <div className="dashBoardContainer">
        {/* <TopBar />
        <SideBar />
        <MainBody /> */}
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="topBar">
          <TopBar />
        </div>
        <div className="mobileTopBar">
          <div className="mobileTopBarFirst">
            <img src={require('../../assets/images/burger_menu.png')} />
            <img src={require('../../assets/images/PASS MANAGER.png')} />
          </div>
          <div className="mobileTopBarLast">
            <img src={require('../../assets/images/search.png')} />
            <img src={require('../../assets/images/sync.png')} />
            <img src={require('../../assets/images/profile.png')} />
          </div>
        </div>
        <div className="mainBody">
          <MainBody />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
