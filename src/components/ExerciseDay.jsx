import React from 'react';
import PropTypes from 'prop-types';

import FaCheck from 'react-icons/lib/fa/check';
import FaClose from 'react-icons/lib/fa/close';

const icons = {
  remove: {
    width: '20px',
    height: '20px',
    alignSelf: 'flex-end',
    color: 'red'
  },

  check: {
    width: '20px',
    height: '20px',
    alignSelf: 'flex-end',
    color: 'green'
  }
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
    let content = null;
    if(!this.state.show) {
      content = <div className= "exercises-list">
        <ul>
          {this.props.workoutRoutine.map((workout, i) =>
            <li key={i}>{workout}</li>
          )}
        </ul>
      </div>;
    } else {
      content = <div className= "exercises-list active">
        <ul>
          {this.props.workoutRoutine.map((workout, i) => {
            return <li className="items" key={i}>{workout}
              <div>
                <FaCheck style={icons.check}/>
                <FaClose style={icons.remove}/>
              </div>
            </li>
          })}
        </ul>
      </div>;
    }
    return(
      <div className="exercise-day">
        <style global jsx>{`
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
            }
            .exercises-list {
              height: 0;
              opacity: 0;
              visibility: hidden;
              padding: 0.4rem 0.9rem;
              color: #000;
            }
            .exercises-list.active {
              opacity: 1;
              height: 100%;
              visibility: visible;
            }
            .exercises-list ul {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            .items {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 100%;
              padding: 0.5rem;
              border-bottom: 1px solid #000;
            }
        `}</style>
      <h2 onClick={this.handleShowingContent}>{this.props.muscle}</h2>
        {content}
      </div>
    );
  }
}

ExerciseDay.propTypes = {
  muscle: PropTypes.string,
  workoutRoutine: PropTypes.array
}

export default ExerciseDay;
