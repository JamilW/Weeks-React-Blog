import "./settings.css"
import Sidebar from "../../components/sidebar/sidebar"

export default function Settings()   {
    return  (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            className="settingsPPIcon"
                            src="https://i.postimg.cc/T2BdX0VV/12790972-10204323952377895-6004706849337027888-n.jpg"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                        <i class="settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}></input>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Jamil"></input>
                    <label>Email</label>
                    <input type="email" placeholder="jamilweeks@yahoo.com"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}