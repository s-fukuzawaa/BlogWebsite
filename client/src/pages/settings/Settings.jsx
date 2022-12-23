import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings(){
    return(
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://i.pinimg.com/736x/79/66/1c/79661ce094727e32d528874bb9683fae.jpg" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Safak"/>
                    <label>Email</label>
                    <input type="email" placeholder="safak@gmail.com"/>
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                    <button className="settingsSubmit">
                        Update
                    </button>
                </form>
            </div>
            
            <Sidebar/>
        </div>
    )
}