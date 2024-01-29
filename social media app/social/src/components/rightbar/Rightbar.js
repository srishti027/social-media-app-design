import './rightbar.css'
// import users from dummy text here
import {Users} from "../../Dummydata"
import Online from "../online/Online"

function Rightbar({profile}) {
  const onlinechathandle = () => {
    console.log('Button clicked!');
  };
  const HomeRightbar =()=>{
    return(
      <>
       <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/posts/birthday.png" alt="" />
          <span className="birthdayText"><b>Damon Salvatore</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        <img className='rightbarAd' src="assets/posts/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarOnlineFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u} onclick={onlinechathandle}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar =()=>{
    return(
      <>
      <h4 className="rightbarTitle"><b>User Information</b></h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Paris</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Rome</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle"><b>User Friends</b></h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/people/m.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jeena Sprouse</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/people/m.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jeena Sprouse</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/people/m.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jeena Sprouse</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/people/m.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jeena Sprouse</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/people/m.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jeena Sprouse</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/people/m.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jeena Sprouse</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile? <ProfileRightbar/> : <HomeRightbar/>}
       
      </div>
  </div>
  )
}

export default Rightbar