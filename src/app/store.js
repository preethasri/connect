import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Pages/Authentication'
console.log(authReducer)
export default configureStore({
  
  reducer: {auth:authReducer},
})
