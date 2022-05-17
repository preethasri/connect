import "./Feedbar.css"

const Feedbar=()=>{
    return(
        <>
        <div className="feedbar-container">
            <div className="feedbar-header">
                <h2>Home</h2>
                </div>
                <div>
          <textarea
            className="w-full py-4 px-3  focus:outline-none border-y-2"
            placeholder="What's on your mind..."
            
          />
        </div>
            
            <div className="feedbar-posts">
            <div className="posts-avatar">
                <img src="./assets/images/avatar2.jpg" alt="" className="normal-img1 " />
                </div>
                <div className="posts-body">
                    <div className="posts-header">
                        <div className="posts-headerText">
                            <h3>Swetha
                                <span className="posts-headerSpecial">
                                    @swetha98 </span>
                            </h3>
                        </div>
                        <div className="posts-header-description">
                          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>


                    </div>
                    
                    <img src=".\assets\moonimg1.jpg" alt="" id="res-image" />
                
                    <div className="posts-footer">
                    <span className="material-icons">chat_bubble_outline</span>
                    <span className="material-icons">favorite_border</span>
                    <span className="material-icons">ios_share</span>

                    </div>
                </div>


            </div>
            {/* 
             */}
                <div className="feedbar-posts">
            <div className="posts-avatar">
                <img src="./assets/images/avatar2.jpg" alt="" className="normal-img1 " />
                </div>
                <div className="posts-body">
                    <div className="posts-header">
                        <div className="posts-headerText">
                            <h3>Swetha
                                <span className="posts-headerSpecial">
                                    @swetha98 </span>
                            </h3>
                        </div>
                        <div className="posts-header-description">
                          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>


                    </div>
                    
                    <img src=".\assets\moonimg1.jpg" alt="" id="res-image" />
                
                    <div className="posts-footer">
                    <span className="material-icons">chat_bubble_outline</span>
                    <span className="material-icons">favorite_border</span>
                    <span className="material-icons">ios_share</span>

                    </div>
                </div>


            </div>
          
        </div>

        
        </>
    )


}
export {Feedbar}