import React from 'react';
import { Switch, Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

//components
import Header from './Header';
import Welcome from './Welcome';
import WeekSchedule from './WeekSchedule';
import SignIn from './SignIn';
import SignUp from './SignUp';
// Styles
import './../styles/styles.css';


function App() {
	return(
		<div className="height">
			<Header />
			<Switch>
				<Route exact path='/' component={Welcome}/>
				<Route path='/profile' component={WeekSchedule}/>
				<Route path='/signin' component={SignIn} />
				<Route path='/signup' component={SignUp} />
			</Switch>
		</div>
	);
}

export default App;
