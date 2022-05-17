import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import "./Modal.css"
import { editUserPost,addUserPost } from '../postSlice'
import { closePostModal } from './PostModalSlice'
export const Modal=()=>{
    const[input,setInput]=useState('')
    const {postModal,postInfo}=useSelector((state)=>state.postModalSlice)
    const dispatch=useDispatch();
    useEffect(()=>{
        if(postInfo &&postInfo.content){
            setInput(postInfo.content)
        }
    },[postInfo])

    const tweetHandler=()=>{
        postInfo 
        ?dispatch(editUserPost({...postInfo,content:input,}))
        :dispatch(addUserPost({content:input}))
    
        setInput('')
        dispatch(closePostModal());
    
    }

    return(
        <>
         <div className={`modal-container justify-center items-center fixed ${postModal ?"flex":"hidden"} `}>
             <div className='modal-container-main flex flex-col gap-4 p-4 rounded-xl w-1/4 md:w-4/5 '>
              <div>
                  <i className='text-2xl fa-solid fa-angle-left cursor-pointer' 
                  onClick={()=>{dispatch(closePostModal()); 
                  setInput('');}} />
                   <i className='text-2xl fa-solid fa-circle-user ml-4' />
                </div> 
                <div>
                    <textarea className=''
                         placeholder="Whats's happening?"
                         value={input}
                         onChange={(e)=>setInput(e.target.value)}
                    />
                </div>
               <div>
                   <button className={` tweet-btn px-4 py-1 w-full rounded-lg text-white font-bold ${input.length< 10 && "hover:cursor-not-allowed"} `} disabled={input.trim().length <10 ?true :false} onClick={()=>tweettHandler()}>Tweet</button>
               </div>
             </div>

         </div>
        </>
    )


}

