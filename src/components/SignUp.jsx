import React from 'react';
import { connect } from 'react-redux';

//Icons
import TiUserOutline from 'react-icons/lib/ti/user-outline';
import MdEmail from 'react-icons/lib/md/email';
import FaUnlockAlt from 'react-icons/lib/fa/unlock-alt';
//Bg Image

//Actions
import { addNewUser } from './../actions';

//firebase
import { firebaseApp } from './../actions';

const icons  = {
	color: 'rgba(0, 188, 212, 0.8)',
	display: 'inline-block',
	margin: '1rem',
	fontSize: '2.4rem'
};

function SignUp(props) {
	let _name = null;
	let _email = null;
	let _password = null;

	function handleCollectingData(event) {
		const { dispatch, history } = props;
		event.preventDefault();
		_name = _name.value;
		_email = _email.value;
		_password = _password.value;

		firebaseApp.auth().createUserWithEmailAndPassword(_email, _password)
			.then( user => {
				dispatch(addNewUser(_name, _email, _password, user.uid));
				_name = '';
				_email = '';
				_password = '';
				history.push('/profile');
			})
			.catch(error => {
				console.log(error);
			});
	}
	return(
		<div className="signup-wrap">
			<form className="form" onSubmit={handleCollectingData}>
				<h1>Sign Up</h1>
				<div className="input-group">
					<div className="input-wrap">
						<TiUserOutline style={icons} />
						<input
							type="text"
							placeholder="Name"
							ref={(input) => {_name = input;}} />
					</div>
					<div className="input-wrap">
						<MdEmail style={icons} />
						<input
							type="email"
							placeholder="Email"
							ref={(input) => {_email = input;} } />
					</div>
					<div className="input-wrap">
						<FaUnlockAlt style={icons} />
						<input
							type="password"
							placeholder="Password"
							ref={(input) => {_password = input;}} />
					</div>
				</div>
				<button type="submit" className="signup">Sign Up</button>
			</form>
		</div>
	);
}

export default connect()(SignUp);
