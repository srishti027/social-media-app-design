import './share.css'
import { useState } from 'react';

export default function Share() {
  const [showAlert, setShowAlert] = useState(false);
  const shareHandle = (e) => {
    e.preventDefault();
    // Your form submission logic here
    setShowAlert(true); // Show the alert when the form is submitted
  };
  setTimeout(() => {
    setShowAlert(null);
  }, 4000);
  return (
    <>
    {showAlert && (
      <div className="alert alert-success mt-3" role="alert">
        Your Post has been updated Successfully!
      </div>
    )}
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src="/assets/people/h.jpg" alt="" />
            <input placeholder="What's in your mind?" className='shareInput' />
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                <i class="fa-solid fa-film photoicon shareIcon"></i>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                <i class="fa-solid fa-tag shareIcon tagicon"></i>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                <i class="fa-solid fa-location-dot locationicon shareIcon"></i>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                <i class="fa-solid fa-icons feelingicon shareIcon"></i>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className='shareButton' onClick={shareHandle}>Share</button>
        </div>
      </div>
    </div>
    </>
  )
}
