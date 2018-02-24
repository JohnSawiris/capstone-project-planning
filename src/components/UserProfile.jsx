import React from 'react';

import WeekSchedule from './WeekSchedule';

function UserProfile(props) {
  return(
    <div>
      <style jsx>{`
          h1 {
            color: #000;
          }
      `}</style>
      <h1>UserProfile works</h1>
      <WeekSchedule />
    </div>
  );
}

export default UserProfile;
