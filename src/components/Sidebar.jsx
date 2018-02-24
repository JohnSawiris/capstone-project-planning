import React from 'react';

import TiUser from 'react-icons/lib/ti/user';

function Sidebar() {
  const avatar = {
    color: "#eee",
    width: "130px",
    height: "130px",
    magrin: "auto",
    border: "1px solid #eee",
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
      `}</style>
      <div className="profile-info">
        <TiUser style={avatar}/>
      </div>
    </div>
  );
}

export default Sidebar;
