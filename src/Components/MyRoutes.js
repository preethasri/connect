import {Routes,Route} from 'react-router-dom'
import { HomePage ,LoginPage,SignUpPage} from '../Pages'
import { PrivateRoute } from './PrivateRoute'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { ResetScroll } from './ResetScroll'


const MyRoutes=()=>{
    const {token}=useSelector((state)=>state.auth || {})
    return(
        <div>
            <ResetScroll>
    <Routes>
        <Route element={<PrivateRoute />} >
        <Route path="/" element={<HomePage />} />
        </Route>
        
        {!token ?(
            <>
            <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        </>
        
        ):(
            <>
            <Route path="/login" element={<Navigate to="/" replace />} />
              <Route path="/signup" element={<Navigate to="/" replace />} />
        </>
        
        )}
      
    </Routes>
    </ResetScroll>
    </div>
    )
}
export {MyRoutes}