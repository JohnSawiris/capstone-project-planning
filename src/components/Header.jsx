import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//components
import SearchBar from './SearchBar';
//images
import malePushUp from './../assets/images/push-up-male.png';
import femalePushUp from './../assets/images/push-up-female.png';
//firebase
import { firebaseApp } from './../actions';
import Firebase from 'firebase';
//Actions
import { userLoggedOut } from './../actions';
//icons
import FaSignIn from 'react-icons/lib/fa/sign-in';
import FaSignOut from 'react-icons/lib/fa/sign-out';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		}
		this.handleSigningOut = this.handleSigningOut.bind(this);
	}

	handleSigningOut() {
		const { dispatch } = this.props;
		firebaseApp.auth().signOut();
	}

	componentWillMount() {
		firebase.auth().onAuthStateChanged((user) => {
			(user)?
				this.setState({ currentUser: user })
				:
				this.setState({ currentUser: null });
		});
	}

	render() {
		console.log(this.props.user);
		return(
			<header className="head">
				<Link to='/' className="logo">
					<img src={malePushUp} />
					<img src={femalePushUp} />
				</Link>
				{
					(this.state.currentUser != null)?
						<nav className="navbar">
							<SearchBar />
							<Link to="/" onClick={this.handleSigningOut}>Sign Out <FaSignOut /></Link>
						</nav>
						:
						<nav className="navbar">
							<Link to="/signin">Sign In <FaSignIn /></Link>
							<Link to="/signup">Sign Up <MdAddCircleOutline /></Link>
						</nav>
				}
			</header>
		);
	}
}

Header.propTypes = {
	user: PropTypes.object,
	dispatch: PropTypes.func
}

export default connect()(Header);
