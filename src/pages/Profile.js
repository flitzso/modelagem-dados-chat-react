import React, { useState } from 'react';
import '../components/css/Profile.css';
import newchat from '../components/imgs/new-chat.png';
import mychat from '../components/imgs/my-chat.png';
import favchat from '../components/imgs/fav-chat.png';
import searchchat from '../components/imgs/search-chat.png';
import editchat from '../components/imgs/search-chat.png';

const Profile = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="profile">
      <div className="photo">
        <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt="Profile" />
      </div>
      <div className="content">
        <div className="text">
          <h3>Seu Nome</h3>
          <h6>Brazil</h6>
          <h6>Sou fã de chats...</h6>
        </div>
        <div className={`btn ${active ? 'active' : ''}`} onClick={handleToggle}>
          <span></span>
        </div>
      </div>
      <div className={`box ${active ? 'open' : ''}`}>
        <i><img className='btnProfile' src={newchat} ></img></i>
        <i><img className='btnProfile' src={mychat} ></img></i>
        <i><img className="btnProfile" src={favchat} ></img></i>
        <i><img className="btnProfile" src={searchchat} ></img></i>
        <i><img className="btnProfile" src={editchat} ></img></i>
      </div>
    </div>
  );
};

export default Profile;
