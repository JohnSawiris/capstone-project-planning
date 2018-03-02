import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
// Redux
import { createStore, applyMiddleware } from 'redux';
import removeExerciseReducer from './reducers/remove-exercise-reducer';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

// Components
import App from './components/App';

//firebase
import { firebaseApp } from './actions';

console.log('this is firebase', firebaseApp);

firebaseApp.auth().onAuthStateChanged( user => {
	if(user) {
		console.log('user');
	} else {
		console.log('couldn\'t log in');
	}
})

const store = createStore(removeExerciseReducer, applyMiddleware(thunkMiddleware));


const render = (Component) => {
	ReactDOM.render(
      <HashRouter>
				<Provider store={store}>
					<Component />
				</Provider>
      </HashRouter>,
		document.getElementById('react-container')
	);
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
