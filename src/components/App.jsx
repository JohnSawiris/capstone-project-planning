import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Header from './Header';
import Welcome from './Welcome';
import WeekSchedule from './WeekSchedule';


function App() {
	return(
    <div className="height">
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Raleway:400,500,600,700');
        * {
          box-sizing: border-box;
        }
        html {
          height: 100%;
        }
        .height {
          height: 100vh
        }
        body {
          margin: 0;
          padding: 0;
          font-family: 'Noto Sans', sans-serif;
          color: #000;
          min-height: 100%;
        }
        img {
          max-width: 100%;
        }
      `}</style>
		<Header />
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/profile' component={WeekSchedule}/>
        </Switch>
    </div>
	);
}

export default App;
