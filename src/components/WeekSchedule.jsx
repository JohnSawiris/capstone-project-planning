import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//components
import ExerciseDay from './ExerciseDay';
import Sidebar from './Sidebar';

//firebase
import Firebase from 'firebase';

//actions
import { fetchUserData } from './../actions';
// import exercises from './../constants/InitialState';

class WeekSchedule extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log(this.props);
		const { dispatch } = this.props;
		firebase.auth().onAuthStateChanged(user => {
			if(user) {
				dispatch(fetchUserData(user.uid))
			} else {
				console.log('There isn\'t a signed in User');
			}
		});
	}

	componentDidMount() {
		setTimeout(() => {
			console.log(this.props.user);
		}, 2000)
	}

	render() {
		const { isFetching, user } = this.props;
		console.log(user);
		if(isFetching === undefined || isFetching === true) {
			return(
				<h1>Fetching Data for you</h1>
			);
		} else {
			return(
				<div className="schedule">
					<div className="main">
						{this.props.exercises.map((exercise, i) => {
							return <ExerciseDay key={i}
								muscle={exercise.muscle}
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
	exercises: PropTypes.array
}

const mapStateToProps = (state) => {
	console.log(state.user);
	return {
		 user: state.user,
		 isFetching: state.isFetching,
		 exercises: state.exercises
	};
};

export default connect(mapStateToProps)(WeekSchedule);
