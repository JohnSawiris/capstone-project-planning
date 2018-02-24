import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

class ExerciseDay extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleShowingContent = this.handleShowingContent.bind(this);
  }

  handleShowingContent() {
    let currState = this.state.show;
    this.setState({
      show: !currState
    });
    console.log(this.state.show);
  }

  render() {
    return(
      <div className="exercise-day">
        <style jsx>{`
            h2 {
              color: #eee;
              background-color: #126cce;
              margin: 0;
              font-weight: 500;
              padding: 0.5rem;
              cursor: pointer;
            }
            .exercise-day {
              display: flex;
              flex-direction: column;
              width: 100%;
              margin: 0.5rem 0 0.5rem;
            }
            .exercises-list {
              height: 0;
              opacity: 0;
              display: none;
              padding: 0.4rem 0.9rem;
              color: #000;
              transition: 0.3s ease-in;
            }
            .exercises-list.exercise-clicked {
              opacity: 1;
              height: 100px;
              display: block;
            }
            .exercises-list ul {
              list-style: none;
              padding: 0;
              margin: 0;
            }
        `}</style>
      <h2 onClick={this.handleShowingContent}>{this.props.muscle}</h2>
        <div className={(this.state) ? "exercises-list" : "exercises-list active"}>
          <ul>
            {this.props.workoutRoutine.map((workout, i) =>
              <li key={i}>{workout}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

ExerciseDay.propTypes = {
  muscle: PropTypes.string,
  workoutRoutine: PropTypes.array
}

export default ExerciseDay;
