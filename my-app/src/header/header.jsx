import "./header.css"

export default function header() {
    return  (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesSm">React & Node</span>
                <span className="headerTitlesLg">Blog</span>
            </div>  
            <img className="headerImg" src="https://images.pexels.com/photos/1287083/pexels-photo-1287083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
    )
}