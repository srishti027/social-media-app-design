import './CloseFriend.css'

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
            <img className="friend" src={user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.Username}</span>
          </li>
  )
}
