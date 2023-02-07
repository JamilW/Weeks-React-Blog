import "./TopBar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <a href="https://www.instagram.com/mil_bixby/"><i className="topIcon fa-brands fa-instagram-square"></i></a>
                <i className="topIcon fa-brands fa-youtube-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                   <li className="topListItem">HOME</li> 
                   <li className="topListItem">ABOUT</li> 
                   <li className="topListItem">CONTACT</li> 
                   <li className="topListItem">WRITE</li> 
                   <li className="topListItem">LOGOUT</li> 
                </ul>
            </div>
            <div className="topRight">
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> 
            </div>
        </div>
    )
}