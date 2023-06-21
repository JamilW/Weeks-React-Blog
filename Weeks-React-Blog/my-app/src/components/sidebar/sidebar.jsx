import "./sidebar.css"

export default function sidebar()   {
    return  (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.postimg.cc/X7WVcMwK/10995827-10202518527803409-4429824122052753281-n.jpg" alt=""></img>
                <p>Good day, fam! My name is Jamil. And I am a lover of music and movies. So much, that I wanted to share my love with all of you and create a community for healthy related discussions.
                <br/>  
                <br/>          
                I created this blog for 80's babies who grew up on YO! MTV Raps and Rap City. Who copped The Purple Tape on cassette. Who waited in lines at the local record stores for midnight sales of their latest albums. Who love old school hip hop and appreciates the current hip hop climate.
                <br/>  
                <br/>   
                In addition, this blog is for movies buffs. For those who watched their favorite movies from a VCR. Who were there opening night for the latest blockbuster. Who grew up on Siskel & Ebert film reviews. Who spent many Friday nights perusing the selections in Blockbuster Video.     
                <br/>
                <br/>
                I look forward to building a community of respectful discourse and healthy debates, where hopefully we can learn from each other, and be entertained. This is my agenda......</p>
            
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Film</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sports</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <a href="https://www.instagram.com/mil_bixby/"><i className="sidebarIcon fa-brands fa-instagram-square"></i></a>
                    <i className="sidebarIcon fa-brands fa-youtube-square"></i>
                </div>
            </div>
        </div>
    )
}