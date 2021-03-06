import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Header from './Header';
import Welcome from './Welcome';
import WeekSchedule from './WeekSchedule';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SearchBar from './SearchBar';
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
				<Route path='/search' component={SearchBar} />
			</Switch>
		</div>
	);
}

export default App;
