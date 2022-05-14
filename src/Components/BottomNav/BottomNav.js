import './BottomNav.css'

const BottomNav=()=>{
    return(
        <>
        <div className='bottom-nav'>
            <div className='bottom-nav-menu'>
                <div className='bottom-nav-list'>
                    <div className='bottom-nav-item'>
                      <span className="material-icons">home</span>
                    </div>
                    <div className='bottom-nav-item'>
                      <span className="material-icons">tag</span>
                    </div>
                   
                    <div className='bottom-nav-item'>
                      <span className="material-icons">person</span>
                    </div>
                    <div className='bottom-nav-item'>
                      <span className="material-icons">login</span>
                    </div>

                </div>

            </div>

        </div>
        </>
    )
}
export {BottomNav}