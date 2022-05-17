import './Sidebar.css'

const Sidebar=()=>{
   return(
       <>
      
    <div className='sidebar-container'>
        <div className='brand'>
          <img src=".\assets\images\logo.png" className='logo-img'/>
          <div className='brand-name'>Connect</div>
       </div>
        
        
        <div className='sidebar-items active'>
          <span className="material-icons">home</span>
          <h2>Home</h2>
        </div>
        <div className="sidebar-items">
        <span className="material-icons">tag</span>
        <h2>Explore</h2>
        </div>
        
        <div className="sidebar-items">
        <span className="material-icons">bookmark</span>
        <h2>BookMarks</h2>
        </div>
        <div className="sidebar-items">
        <span className="material-icons">person</span>
        <h2>Profile</h2>
        </div>
        <div className="sidebar-items">
        <span className="material-icons">logout</span>
        <h2>Logout</h2>
        </div>
       

        <button className='sidebar-tweet-btn'>
            Tweet

        </button>

    </div>
    </>
   )

}

export {Sidebar}
