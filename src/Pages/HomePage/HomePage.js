import "./HomePage.css"
import { Sidebar } from "../../Components/Sidebar/Sidebar"
import { Feedbar } from "../../Components/Feedbar/Feedbar"
import { Aside } from "../../Components/Aside/Aside"
import { BottomNav } from "../../Components/BottomNav/BottomNav"


const HomePage=()=>{
    return(
        <>
        <div className="homepage-container">
           <Sidebar />
           <Feedbar />
           <Aside />
           <BottomNav />
       </div>
    </>
    )

}
export {HomePage}