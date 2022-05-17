import "./HomePage.css"
import {Singlepost} from './SinglePost'
import { openPostModal } from "./Modal/PostModalSlice"
import { getUserPost } from "./postSlice"
import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Loader } from "../../Components/Loader/Loader"


export function HomePage(){
    const {allPosts}=useSelector((state)=>state.post)
    const  {user}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();
    const [feedPost,setFeedPost]=useState([])
    const [trendPost,setTrendPost]=useState({isTrend:false,posts:[]})


    useEffect(()=>{
        if(allPosts){
            setFeedPost(
                allPosts ?.filter((post)=>
                post?.username===user?.username) ||
                user?.following?.find((ele)=>post?.username ===ele?.username)
            )
            .sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
        }
    },[user,allPosts])

    useEffect(()=>{
        dispatch(getUserPost(user.username))
    },[allPosts])

    const trendingHandler=()=>{
        setTrendPost((prev)=>({...prev,isTrend:true}))
        setTrendPost((prev)=>({
            ...prev,
            posts:[...feedPost]
            ?.sort((a,b)=>b.likes.likeCount -a.likes.likeCount)
            ?.filter((post)=>post.likes.likeCount >0),
        }))
    };

    const latestHandler=()=>{
        setTrendPost((prev)=>({...prev,isTrend:false}))
    }
  
     return(
         <div className="homepage-container">
             <div className="tweet-input flex justify-between items-center px-4 py-2 rounded-xl gap-4 mb-6 sm:mb-4 sm:py-2">
                 <i className="text-xl fa-solid fa-circle-user cursor-pointer" />
                     <div className="grow flex justify-between items:center" onClick={()=>dispatch(openPostModal())}>
                        <p className="grow focus:outline-none opacity-50 sm:text-sm">Whats's happenting?</p>
                        <i className="text-xl fa-solid fa-circle-plus cursor-pointer" />
                     </div>
            </div>
            <div className="px-4 py-2 rounded-xl gap-4 mb-6 text-center font-semibold justify-evenly text-gray-500">
                <div className="w-1/2 border-r-2 border-blueviolet-400">
                    <span onClick={()=>trendingHandler()}>
                        <i className="fa-solid fa-fire pr-2" />
                          Trending
                     </span>

                </div>

                <div className="w-1/2 border-r-2 border-blueviolet-400">
                    <span onClick={()=>latestHandler()}>
                        <i className="fa-solid fa-sort pr-2" />
                          Latest
                     </span>
                </div>
                

            </div>
             trendPost.isTrend ?(
                 <div className="flex flex-col gap-6 md:mb-14">
                     {
                         trendPost.posts.length !==0 ?(
                             [...trendPost.posts].map((post)=> <Singlepost key={post._id} post={post} />))
                             :(
                                 <div className="text-xl m-auto text-gray-500 font-bold mt-16">
                                     <p className="text-center">Like More Posts to See What's Happening</p>
                                 </div>
                             )}
                             </div>
                             ):
                             (
                                 <div className="flex flex-col gap-6 md:mb-14">
                                     {feedPost.length !==0 ?(
                                         feedPost.map((post)=><Singlepost key={post._id } post={post} />)
                                     ):(
                                        <></>
                                     )
                                    }
                                 <div className="text-xl m-auto text-gray-500 font-bold mt-16 ">
                                     <p>Like More Posts to see What's Happening</p>

                                 </div>
                                 </div>
                             )
        </div>
     )
}


















