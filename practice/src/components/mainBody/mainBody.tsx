import "./mainBody.css";
import { useState } from "react";
import Modal from "../modal/modal";
import EditModal from "../editModal/editModal";

const MainBody = () => {
  const [category, setCategory] = useState("Social Media");
  const [toggle, setToggle] = useState(false);
  const [edit, setEdit] = useState(false);
  const [modal, setModal] = useState("");

  const Category = (e: any) => {
    setCategory(e.target.value);
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
  const previousData = JSON.parse(localStorage.getItem(currentUser) || "[]");

  //   if (localStorage.getItem(currentUser) === null) {
  //     localStorage.setItem(
  //       JSON.stringify(currentUser.mobileNumber),
  //       JSON.stringify([])
  //     );
  //   }

  const modalActive = (data: any) => {
    setToggle(data);
  };
  const modalSelect = (data: any) => {
    setEdit(data);
  };

  return (
    <div className="mainBody">
      <div className="mainBodyContainer">
        <div className="mainBodyHeader">
          <div className="headerTitle">Sites</div>

          <div className="headerOptions">
            <div className="headerSearch">
              <input type="text" className="searchBar" placeholder="Search" />
              <img
                src={require("../../assets/images/search.png")}
                alt="search"
                className="searchBarIcon"
              />
            </div>
            <div className="headerAddButton">
              <img
                src={require("../../assets/images/add_btn.png")}
                alt="add"
                onClick={() => {
                  setModal("Add Site");
                  setToggle(true);
                }}
              />
            </div>
          </div>
        </div>

        <div className="mainBodyCount">
          <div className="socialMedia">Social Media</div>

          <div className="socialMediaCount">
            {previousData.length < 10
              ? `0${previousData.length}`
              : previousData.length}
          </div>
          <div className="socialMediaDropDown">
            <img
              src={require("../../assets/images/Path Copy.png")}
              alt="path copy"
            />
          </div>
        </div>

        <div className="socialMediaMobile">
          <div className="socialMedia">Social Media</div>
          <div className="socialMediaCount">
            {previousData.length < 10
              ? `0${previousData.length}`
              : previousData.length}
          </div>
          <div className="socialMediaDropDown">
            <img
              src={require("../../assets/images/Path Copy.png")}
              alt="path copy"
            />
          </div>

        </div>

        <div className="mainBodyContainerBox">
          <div className="mainBodyContents">
            {JSON.stringify(previousData) === "[]" ? (
              <div className="mainBodyEmpty">
                <div>Please Click on the “+” symbol to add sites</div>
              </div>
            ) : (
              <div className="cardContainer">
                {previousData.map((element: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="cardContents"
                      onClick={() => {
                        setModal("Edit Site");
                        setEdit(true);
                      }}
                    >
                      <div className="cardHead">
                        <div className="cardLogo">
                          {element.icon === "" ? (
                            <img
                              src={require("../../assets/images/Facebook.png")}
                              height="50px"
                              style={{
                                backgroundPosition: "cover",
                                borderRadius: "50%",
                              }}
                            />
                          ) : (
                            <img src={element.icon} alt="" />
                          )}
                        </div>
                        <div>
                          <div className="copyTitle"> {element.siteName}</div>
                          <div className="cardCopy">
                            <img
                              src={require("../../assets/images/copy.png")}
                              alt="copy"
                            />
                            <div className="copyPass">Copy Password</div>
                          </div>
                        </div>
                      </div>
                      <div className="siteLink">{element.url}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {toggle ? (
          <aside className="modal">
            {/* <Modal props={modal} element={Index} /> */}
            <Modal modalActive={modalActive} />
          </aside>
        ) : (
          ""
        )}
        {edit ? (
          <aside className="modal">
            {/* <Modal props={modal} element={Index} /> */}
            <EditModal modalActive={modalSelect} />
          </aside>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MainBody;
