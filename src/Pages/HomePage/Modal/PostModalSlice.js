import {createSlice} from "@reduxjs/toolkit"


const initialState={
    postModal:false,
    postInfo:{},


}

const postModalSlice=createSlice({
    name:"postModal",
    initialState,
    reducers:{
        openPostModal:(state,action)=>{
            state.postModal=true,
            state.postInfo=action?.payload;
        },
        closePostModal:(state,action)=>{
            state.postModal=false,
            state.postInfo=action?.payload;

        }
    }
})

export const {openPostModal,closePostModal}=postModalSlice.actions;
export default postModalSlice.reducer;