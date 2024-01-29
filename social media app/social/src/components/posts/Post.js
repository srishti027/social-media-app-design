import './post.css'
import Comments from '../comments/Comments';
import {Users} from "../../Dummydata"
import { useState } from 'react';

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const  [isLiked, setIsLiked] = useState(false)
    const [showComments, setShowComments] = useState(false); // Add this state variable
    const likeHandler =()=>{
        setLike(isLiked? like-1:like+1)
        setIsLiked(!isLiked)
    }
    const toggleComments = () => {
        setShowComments(!showComments); // Toggle the comment dropdown
      }
    
    console.log(post);
  return (
    <div  className='post'>
        <div className="postWrapper">
<div className="postTop">
    <div className="postTopLeft">
        <img className='postProfileImg'  src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
        <span className="postUserName">{Users.filter(u=>u.id === post.userId)[0].Username}</span>
        <span className="postDate">{post.date}</span>
    </div>
    <div className="postTopRight">
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
</div>
<div className="postCenter">
    <span className="postText">
    {post.desc}</span>
        <img className='postImg' src={post.photo} alt="" />
</div>
<div className="postBottom">
    <div className="postBottomLeft">
    <i class="fa-solid fa-thumbs-up likeicon reactIcon zoom" onClick={likeHandler}></i>
    <i class="fa-solid fa-heart hearticon reactIcon zoom" onClick={likeHandler}></i>
    <i class="fa-solid fa-face-surprise shockicon reactIcon zoom" onClick={likeHandler}></i>
    <span className="postLikeCounter">{like} people liked this post</span>
    </div>
    <div className="postBottomRight">
        <span className="postCommentText" onClick={toggleComments}>{post.comment} comments</span>
    </div>
</div>
{showComments && <Comments/>} {/* Render the Comments component when showComments is true */}
        </div>
    </div>
  )
}
