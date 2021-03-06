import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//components
import ExerciseDay from './ExerciseDay';
import Sidebar from './Sidebar';

//firebase
import Firebase from 'firebase';

//actions
import { fetchUserData, userLoggedOut } from './../actions';

class WeekSchedule extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	componentWillMount() {
		const { dispatch, history } = this.props;
		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				dispatch(fetchUserData(user.uid));
			} else {
				history.push('/');
			}
		});
	}

	componentDidMount() {
		setTimeout(() => {
			console.log(this.props.exercises);
		}, 2000);
	}

	render() {
		console.log(this.props);
		const { isFetching, user, location } = this.props;
		if(isFetching === undefined || isFetching === true) {
			return(
				<h1>Fetching Data for you</h1>
			);
		} else {
			return(
				<div className="schedule">
					<div className="main">
						{Object.values(this.props.exercises).map((exercise, i) => {
							return <ExerciseDay key={i}
								index={i}
								muscle={exercise.muscle}
								exercises={this.props.exercises}
								workoutRoutine={exercise.workoutRoutine} />;
						}
						)}
					</div>
					<div className="sidebar">
						<Sidebar userName={user.displayName}/>
					</div>
				</div>
			);
		}

	}
}

WeekSchedule.propTypes = {
	dispatch: PropTypes.func,
	user: PropTypes.object,
	isFetching: PropTypes.bool,
	exercises: PropTypes.array,
	displayName: PropTypes.string
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		 user: state.user,
		 isFetching: state.user.isFetching,
		 exercises: state.user.exercises,
		 displayName: state.user.displayName
	};
};

export default connect(mapStateToProps)(WeekSchedule);
