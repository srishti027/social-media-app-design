import './online.css'

export default function Online({user}) {
  return (
    <li className="rightbarOnlineFriend">
            <div className="rightbarImgFriendProfile">
              <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
              <span className="rightbarOnline">

              </span>
            </div>
            <span className="rightbarUsername">{user.Username}</span>
          </li>
  )
}
