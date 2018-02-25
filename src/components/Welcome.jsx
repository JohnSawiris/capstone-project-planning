import React from 'react';

import background from './../assets/images/background.jpg';

function Welcome() {
  return(
    <div className="wrap">
      <style jsx>{`
          .wrap {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: 100%;
            margin: 0 auto;
            width: 100%;
            background-image: linear-gradient(to right,rgba(150, 201, 61, 0.3),rgba(0, 176, 155, 0.3)), url(${background});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
          }
          .welcome-wrapper {
            width: 600px;
            margin-top: 1rem;
            background-color: rgba(252,76,53, 0.86);
            padding: 1rem 2rem 1rem;
            border-radius: 0.3rem;
            color: #eee;
          }
        `}</style>
      <div className="welcome-wrapper">
        <h1>Work On Yourself</h1>
        <p>It's hard sometimes to memorize workout exercises for specific muscle for when working out at the gym.</p>
        <p>That is exactly what Work On Yourself does, it invites users to list and organize their workout exercises based on the muscle group.</p>
      </div>
    </div>
  );
}

export default Welcome;
