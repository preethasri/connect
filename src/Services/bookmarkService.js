import axios from 'axios'

export const getAllBookmarkService=(token)=>
   axios.get("/api/users/bookmark",{
       headers:{
           authorization:token,
       }
   })

   export const addBookmarkService=(postId,token)=>
    axios.post(`/api/users/bookmark/${postId}`,
    {},
    {headers:{
        authorization:token,
    }
}
    )

    export const deleteBookmarkService=(postId,token)=>
    axios.post(`api/users/bookmark/${postId}`,
    {},
    {
        headers:{
            authorization:token,
        },
    }
    )