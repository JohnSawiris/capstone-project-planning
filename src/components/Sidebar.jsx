import React from 'react';

import TiUser from 'react-icons/lib/ti/user';

function Sidebar() {
  const avatar = {
    color: "#fff",
    width: "130px",
    height: "130px",
    magrin: "auto",
    border: "3px solid #fff",
    borderRadius: "50%"
  }
  return(
    <div>
      <style jsx>{`
          .profile-info {
            display: block;
            width: 130px;
            margin: auto;
          }
          h4 {
            color: #fff;
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
