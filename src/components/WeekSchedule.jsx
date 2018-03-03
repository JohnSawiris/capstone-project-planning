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
import exercises from './../constants/InitialState';

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
		return(
			<div className="schedule">
				<div className="main">
					{Object.keys(exercises).map((exercise) => {
						let muscleGroupExercise = exercises[exercise];
						return <ExerciseDay key={exercise}
							id={exercise}
							muscle={muscleGroupExercise.muscle}
							workoutRoutine={muscleGroupExercise.workoutRoutine} />;
					}
					)}
				</div>
				<div className="sidebar">
					<Sidebar />
				</div>
			</div>
		);
	}
}

WeekSchedule.propTypes = {
	user: PropTypes.object
}

const mapStateToProps = (state) => {
	console.log(state.isFetching);
	return {
		 user: state.user,
		 isFetching: state.isFetching
	};
};

export default connect(mapStateToProps)(WeekSchedule);
