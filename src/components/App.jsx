import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Header from './Header';
import Welcome from './Welcome';
import UserProfile from './UserProfile';

function App() {
	return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route path='/profile' component={UserProfile}/>
      </Switch>
    </div>
	);
}

export default App;
