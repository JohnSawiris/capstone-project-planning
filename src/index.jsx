import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
//components
import App from './components/App';

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
      <HashRouter>
        <Component />
      </HashRouter>
		</AppContainer>,
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
