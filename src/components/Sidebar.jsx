import React from 'react';

import TiUser from 'react-icons/lib/ti/user';

function Sidebar() {
  const avatar = {
    color: "#333",
    width: "150px",
    height: "150px",
    magrin: "auto",
    border: "3px solid #333",
    borderRadius: "50%"
  }
  return(
    <div>
      <style jsx>{`
          .profile-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: auto;
          }
          h4 {
            color: #333;
            text-align: center;
          }
      `}</style>
      <div className="profile-info">
        <TiUser style={avatar}/>
        <h4>User Name</h4>
      </div>
    </div>
  );
}

export default Sidebar;
