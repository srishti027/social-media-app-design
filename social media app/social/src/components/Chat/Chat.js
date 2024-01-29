import React from 'react'
import './chat.css'

export default function Chat() {
  return (
      <div className="chatWrapper">
        <div className="ChatTop">
            <div className="onlineChat"></div>
            <div className="chatName">Cole Sprouse</div>
           <div className="chatIcons">
           <i class="fa-solid fa-2x fa-video videoicon"></i>
            <i class="fa-solid fa-2x fa-phone phoneicon"></i>
            <i class="fa-solid fa-2x fa-gear settingicon"></i>
            <i class="fa-solid fa-2x fa-x closeicon"></i>
           </div>
        </div>
        <div className="bottom">
            <div className="message">
            <input type="text" placeholder='Type a message....' className='inputmessagechat' />
             <i class="fa-solid fa-photo-film picicon baseicon"></i>
             <i class="fa-solid fa-camera camicon baseicon"></i>
             <i class="fa-regular fa-face-smile smileicon baseicon"></i>
             <i class="fa-solid fa-hand-holding-heart gificon baseicon"></i>
             <i class="fa-solid fa-location-pin pinicon baseicon"></i>
            <button type="button" class="btn btn-primary sendbtn">Send</button>
            </div>
            <div className="base">
            <div className="baseicon">
           
            </div>
            </div>
        </div>
      </div>
  )
}
