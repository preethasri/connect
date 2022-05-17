import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { getAllPostService,
      getUserPostService,
      addPostService,
      editPostService,
      deletePostService,
      likePostService,
      dislikePostService,
      addBookmarkService,
      deleteBookmarkService,

 } from "../../Services";

 const initialState={
     allPosts:[],
     userPosts:[],
 }

 export const getAllPost=createAsyncThunk("post/getALlPosts",async(_,thunkAPI)=>{
   try{
       const response=await getAllPostService();
       return response.data;
   }  
   catch(error){
       return thunkAPI.rejectWithValue(error)
   }
 })

 export const getUserPost=createAsyncThunk("post/getUserPosts",async(username,thunkAPI)=>{
     try{
         const response =await getUserPostService(username);
         return response.data.posts;
     }catch(error){
         return thunkAPI.rejectWithValue(error)
     }
 });

export const addUserPost=createAsyncThunk("post/addUserPost",async(postData,thunkAPI)=>{
    try{
        const token=localStorage.getItem("token");
        const response=await addPostService(postData,token)
        return response.data;
    }
    catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const editUserPost=createAsyncThunk("post/editUserPost",async(postData,thunkAPI)=>{
   try{
       const token=localStorage.getItem("token");
       const response=await editPostService(postData,token)
       return response.data;
   }
   catch(err){
       return thunkAPI.rejectWithValue(err)
   }


})

export const deleteUserPost=createAsyncThunk("post/deleteUserPost",async(postId,thunkAPI)=>{
    try{
        const token=localStorage.getItem("token");
        const response=await deletePostService(postId,token)
        return response.data;

    }
    catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})

export const likeAndDislikePost=createAsyncThunk("post/likeAndDislikePost",async({postId,isLike},thunkAPI)=>{
    try{
        const token=localStorage.getItem("token");
        const response=isLike ? 
        await likePostService(postId,token)
        : await dislikePostService(postId,token)
        return response.data
    }
    catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const addAndRemoveBookmark=createAsyncThunk("post/addAndRemoveBookmark",
async({postId,isBookmark},thunkAPI)=>{
    try{
        const token=localStorage.getItem("token");
        const response=isBookmark 
        ?await addBookmarkService(postId,token)
        :await deleteBookmarkService(postId,token)
        return response.data
    }
    catch(error){
        return thunkAPI.rejectWithValue(error)
    }
}
  
)
const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:{
        // getallpost
        [getAllPost.pending]:(state)=>{
            state.postStatus="pending"
        },
        [getAllPost.fulfilled]:(state,action)=>{
            state.postStatus="fulfilled";
            state.allPosts=action.payload.posts;
        },
        [getAllPost.rejected]:(state,action)=>{
            state.postStatus="rejected";
            state.allPosts=action.payload;
        },
        //getuserpost
        [getUserPost.pending]:(state)=>{
            state.postStatus="pending"
        },
        [getUserPost.fulfilled]:(state,action)=>{
            state.postStatus="fulfilled";
            state.allPosts=action.payload;
        },
        [getUserPost.rejected]:(state,action)=>{
            state.postStatus="rejected";
            state.allPosts=action.payload;
        },
        // adduserPost
        [addUserPost.pending]:(state)=>{
            state.postStatus="pending"
        },
        [addUserPost.fulfilled]:(state,action)=>{
            state.postStatus="fulfilled";
            state.allPosts=action.payload;
        },
        [addUserPost.rejected]:(state,action)=>{
            state.postStatus="rejected";
            state.allPosts=action.payload;
        },
        //edituserPost
        [editUserPost.pending]:(state)=>{
            state.postStatus="pending"
        },
        [editUserPost.fulfilled]:(state,action)=>{
            state.postStatus="fulfilled";
            state.allPosts=action.payload.posts;
        },
        [editUserPost.rejected]:(state,action)=>{
            state.postStatus="rejected";
            state.allPosts=action.payload;
        },
    //    deleteuserpost
     [deleteUserPost.pending]:(state)=>{
        state.postStatus="pending"
     },
     [deleteUserPost.fulfilled]:(state,action)=>{
        state.postStatus="fulfilled";
        state.allPosts=action.payload.posts;
     },
     [deleteUserPost.rejected]:(state,action)=>{
        state.postStatus="rejected";
        state.allPosts=action.payload;
     },

    //  likeandDislikePost
    [likeAndDislikePost.pending]:(state)=>{
        state.postStatus="pending"
     },
     [likeAndDislikePost.fulfilled]:(state,action)=>{
        state.postStatus="fulfilled";
        state.allPosts=action.payload.posts;
     },
     [likeAndDislikePost.rejected]:(state,action)=>{
        state.postStatus="rejected";
        state.allPosts=action.payload;
     },
    //  addAnddeleteBookmark
    [addAndRemoveBookmark.pending]:(state)=>{
        state.postStatus="pending"
     },
     [addAndRemoveBookmark.fulfilled]:(state,action)=>{
        state.postStatus="fulfilled";
        state.allPosts=action.payload.posts;
     },
     [addAndRemoveBookmark.rejected]:(state,action)=>{
        state.postStatus="rejected";
        state.allPosts=action.payload;
     },







    }
})
export default postSlice.reducer;