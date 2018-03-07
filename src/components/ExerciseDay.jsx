import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Icons
import FaTrashO from 'react-icons/lib/fa/trash-o';

//firebase
import Firebase from 'firebase';

//Action
import { removeExercise } from './../actions';

class ExerciseDay extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
		this.handleShowingContent = this.handleShowingContent.bind(this);
	}

	handleShowingContent() {
		let currState = this.state.show;
		this.setState({
			show: !currState
		});
	}

	render() {
		const { muscle, workoutRoutine, user, exercises, index } = this.props;
 		return(
			<div className="exercise-day">
				<h2 className="exercise-day-header" onClick={this.handleShowingContent}>{muscle}</h2>
				<div className={(this.state.show) ? 'exercises-list active' : 'exercises-list'}>
					<ul>
						{this.props.workoutRoutine.map((workout, i) =>
							<li className="items" key={i}>{workout}
								<div>
									<FaTrashO onClick={() => {
										//pass the user.uid to the the action and compare the logged user and remove the entry from the exercises array
										// dispatch(removeExercise(user.id,));
										console.log(muscle, exercises[index], i);
									}} className="remove"/>
								</div>
							</li>
						)}
					</ul>
				</div>
			</div>
		);
	}
}

ExerciseDay.propTypes = {
	muscle: PropTypes.string,
	workoutRoutine: PropTypes.array,
	index: PropTypes.number,
	exercises: PropTypes.array
};

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(ExerciseDay);
