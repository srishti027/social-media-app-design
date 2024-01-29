import React, { useState } from 'react';
import './comments.css';

export const CommentsData = [
  {
    id: 1,
    profilePicture: "/assets/people/r.jpg",
    Username: "Damon Salvatore",
    Comment: "Pretty!😘😘"
  },
  {
    id: 2,
    profilePicture: "/assets/people/s.jpg",
    Username: "Lou Griffin",
    Comment: "You look beautiful!😘😘😘😘😘😘"
  },
  {
    id: 3,
    profilePicture: "/assets/people/t.jpg",
    Username: "Nate Archibald",
    Comment: "Hottest!😘😘😘😘"
  },
  {
    id: 4,
    profilePicture: "/assets/people/u.jpg",
    Username: "Kaysen Chas",
    Comment: "Can't take my eyes off you!😘😘😘😘"
  }
];

export default function Comments() {
  const [showAlert, setShowAlert] = useState(false);
  const [newComment, setNewComment] = useState('');

  const posthandle = (e) => {
    e.preventDefault();
    // Your form submission logic here (you may want to handle the new comment)
    setShowAlert(true); // Show the alert when the form is submitted
    setNewComment(''); // Clear the input field after posting
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  return (
    <div className="commentWrapper">
      {CommentsData.map((comment) => (
        <div key={comment.id} className="box">
          <div className="CommentFriend">
            <img src={comment.profilePicture} alt="" className="CommentFriendImg" />
            <div className="CommentFriendName">{comment.Username}</div>
            <div className="commentmsg">{comment.Comment}</div>
          </div>
        </div>
      ))}
      <div className="addcomment">
        <input
          className="inputcommentText"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="button" className="btn btn-primary postbtn" onClick={posthandle}>
          Post
        </button>
        {showAlert && (
          <div className="alert alert-success mt-3" role="alert">
            Your post has been updated successfully!
          </div>
        )}
      </div>
    </div>
  );
}
