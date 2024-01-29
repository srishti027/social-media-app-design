import "./sidebar.css";
import {Users} from "../../Dummydata"
import CloseFriend from "../closeFriends/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <i class="fa-solid fa-rss sidebarIcon"></i>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-comment sidebarIcon"></i>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-video sidebarIcon"></i>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-people-group sidebarIcon"></i>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-bookmark sidebarIcon"></i>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-question sidebarIcon"></i>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-briefcase sidebarIcon"></i>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-calendar-days sidebarIcon"></i>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-graduation-cap sidebarIcon"></i>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton"> Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
         
        </ul>
      </div>
    </div>
  );
}
