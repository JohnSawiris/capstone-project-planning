import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import FaCheck from 'react-icons/lib/fa/check';
import FaClose from 'react-icons/lib/fa/close';

const icons = {
  remove: {
    width: '35px',
    height: '35px',
    alignSelf: 'flex-end',
    color: '#f10606',
    padding: '0.5rem',
    cursor: 'pointer'
  },

  check: {
    width: '35px',
    height: '35px',
    alignSelf: 'flex-end',
    color: '#068606',
    padding: '0.5rem',
    cursor: 'pointer'
  },


}

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
  }

  render() {
    return(
      <div className="exercise-day">
      <h2 onClick={this.handleShowingContent}>{this.props.muscle}</h2>
        <div className={(this.state.show) ? "exercises-list active" : "exercises-list"}>
          <ul>
            {this.props.workoutRoutine.map((workout, i) =>
              <li className="items" key={i}>{workout}
                <div>
                  <FaCheck style={icons.check}/>
                  <FaClose onClick={() => {console.log(this.props.id, i)}} style={icons.remove}/>
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
  workoutRoutine: PropTypes.array
}

export default ExerciseDay;
