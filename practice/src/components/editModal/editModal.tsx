import "./editModal.css";
import { useState, useEffect } from "react";

const EditModal = (props: any) => {

    const [edit, setEdit] = useState(false);

    const [value, setValue] = useState({
        siteName: "",
        url: "",
        sector: "",
        userName: "",
        sitePassword: "",
        notes: "",
        icon: "",
    });

    const [index, setindex] = useState<any>(null);

    const previousSites = localStorage.getItem("currentUser") || "[]";
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
    const previousData = JSON.parse(localStorage.getItem(currentUser) || "[]");

    const [close, setClose] = useState(true);

    useEffect(() => {
        props.modalActive(close);
    });

    const editHandler = (e: any, index: any) => {
        e.preventDefault();

        const siteData = {
            siteName: e.target.siteName.value,
            url: e.target.url.value,
            sector: e.target.sector.value,
            userName: e.target.userName.value,
            sitePassword: e.target.sitePassword.value,
            notes: e.target.notes.value,
            icon: "",
        };

        const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
        const previousData = JSON.parse(localStorage.getItem(currentUser) || "[]");
        console.log(currentUser);

        console.log("siteData", siteData);
        if (
            siteData.siteName !== '' &&
            siteData.url !== "" &&
            siteData.userName !== "" &&
            siteData.sitePassword !== "" &&
            siteData.sector !== ""
        ) {
            previousData.push(siteData);
            // console.log('P', previousData);
            localStorage.setItem(currentUser, JSON.stringify(previousData));
            window.location.reload();
        } else {
            alert("Please enter all the required fields");
        }
    };

    return (
        <div className="modalBody">
            {/* {previousData.map((user: any, index: number) => { */}
            {/* <div className="modalMobileTopbar"></div> */}
            <div className="overlay">
                {" "}
                <div className="modal-content">
                    <div className="modalEditHeader">
                        <div className="modalTitle">Site Details</div>
                        {/* <div className="modalButtons"> */}
                        <button className="modalButton modalSaveButton" type="submit">
                            Edit{" "}
                        </button>
                    </div>
                    {/* </div> */}
                    {/* <form onSubmit={(e) => { editHandler(e, index) }}> */}
                    <form>
                        <div className="modalBodyForm">
                            <div className="modalInput occupy">
                                <div>URL</div>
                                <input type="text" name="url" className="modalInputBar"
                                // value={
                                //     edit ? value.url : previousData[index].url}
                                />
                            </div>
                            <div className="modalInput">
                                <div>Site Name</div>
                                <input type="text" name="siteName" className="modalInputBar" />
                            </div>
                            <div className="modalInput">
                                <div>Sector/Folder</div>
                                <select name="sector" className="modalInputBar">
                                    {" "}
                                    <option value="Social Media">Social Media</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Business">Business</option>
                                </select>
                            </div>
                            <div className="modalInput">
                                <div>User Name</div>
                                <input type="text" name="userName" className="modalInputBar"
                                // value={
                                //     edit ? value.userName : previousData[index].userName}
                                />
                            </div>
                            <div className="modalInput">
                                <div>Site Password</div>
                                <div className="paswordEyeContainer">
                                    <input
                                        type="text"
                                        name="sitePassword"
                                        className="modalInputBar"
                                    />
                                    <img
                                        src={require("../../assets/images/eye_on.png")}
                                        alt="eye"
                                        className="passwordEye"
                                    />
                                </div>
                            </div>
                            <div className="modalInput occupy">
                                <div>Notes</div>
                                <textarea className="modalInputBar" name="notes" />
                            </div>
                        </div>

                    </form>
                    <div className="closeButton">
                        <button
                            onClick={() => {
                                setClose(false);
                            }}
                            className="close"
                        >
                            <img
                                src={require("../../assets/images/close_button.png")}
                                alt="close"
                            />
                        </button>
                    </div>
                </div>
            </div>
            {/* })}; */}
        </div>
    );
};

export default EditModal;
