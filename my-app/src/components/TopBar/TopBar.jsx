import "./TopBar.css"
import { Link } from "react-router-dom"

export default function TopBar() {
    const user = false;
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
                   <li className="topListItem">
                    <Link className="link" to="/">HOME</Link> 
                   </li> 
                   <li className="topListItem">
                   <Link className="link" to="/">ABOUT</Link>
                   </li> 
                   <li className="topListItem">
                   <Link className="link" to="/">CONTACT</Link>
                   </li> 
                   <li className="topListItem">
                   <Link className="link" to="/write">WRITE</Link>
                   </li> 
                   <li className="topListItem">
                   <Link className="link" to="/">
                    {user && "LOGOUT"}
                   </Link>
                   </li> 
                </ul>
            </div>
            <div className="topRight">
                {
                    user ?  (
                        <img
                            className="topImg"
                            src="https://i.postimg.cc/KjCWM5SX/35749773-10209126540959608-7432460838671220736-n.jpg"
                            alt=""
                />
                    )   :   (
                            <ul className="topList">
                                <li className="topListItem">
                                    <Link className="link" to="/login">LOGIN</Link>
                                </li>
                                <li className="topListItem">
                                    <Link className="link" to="/register">REGISTER</Link>
                                </li>    
                            </ul>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i> 
            </div>
        </div>
    )
}