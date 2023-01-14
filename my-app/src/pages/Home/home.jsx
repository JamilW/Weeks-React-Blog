import Header from "../../header/header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/sidebar"
import "./home.css";

export default function home()  {
    return  (
        <>
            <Header/>
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}