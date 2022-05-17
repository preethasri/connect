import "./Aside.css"

const Aside=()=>{
    return(
        <>
        <div className="aside-container">
            <div className="aside-input">
            <span className="aside-search material-icons">search</span>
            <input type="text" placeholder="search" />
            </div>
            <div className="aside aside-header">
                <h2>Who To Follow</h2>
                <div className="aside aside-items">
                    <div className="aside aside-item">
                        
                    <img src="./assets/images/avatar2.jpg" alt="" className="normal-img1 " />
                    <div className="aside-item-headerText">
                            <h3>Swetha
                                <span className="aside-item-headerSpecial">
                                    @swetha98 </span>
                            </h3>
                        </div>
                    <div>
                        
                        <div className="aside-item-btn">
                            <button className="follow-btn">Follow

                            </button>

                        </div>

                    </div>
                    </div>
                    {/*  */}
                    <div className="aside aside-item">
                    <img src="./assets/images/avatar2.jpg" alt="" className="normal-img1 " />
                    <div className="aside-item-headerText">
                            <h3>Srinithi
                                <span className="aside-item-headerSpecial">
                                    @srinith03 </span>
                            </h3>
                        </div>
                    <div>
                        <div className="aside-item-btn">
                            <button className="follow-btn">Follow

                            </button>

                        </div>

                    </div>
                    </div>
                    {/*  */}
                    <div className="aside aside-item">
                    <img src="./assets/images/avatar2.jpg" alt="" className="normal-img1 " />
                    <div className="aside-item-headerText">
                            <h3>Chitra
                                <span className="aside-item-headerSpecial">
                                    @chitra20 </span>
                            </h3>
                        </div>
                    <div>
                        <div className="aside-item-btn">
                            <button className="follow-btn">Follow

                            </button>

                        </div>

                    </div>
                    </div>
                    {/* 
                     */}
                      <div className="aside aside-item">
                     <img src="./assets/images/avatar2.jpg" alt="" className="normal-img1 " />
                    <div className="aside-item-headerText">
                            <h3>Vasanthi
                                <span className="aside-item-headerSpecial">
                                    @vasanthi00 </span>
                            </h3>
                        </div>
                    <div>
                        <div className="aside-item-btn">
                            <button className="follow-btn">Follow

                            </button>

                        </div>

                    </div>
                    </div>

                </div>

            </div>
            

        </div>
        </>

    )
}
export {Aside}