import React from 'react';
import PropTypes from 'prop-types';

function ExerciseDay(props) {
  return(
    <div className="exercise-day">
      <style jsx>{`
          h2 {
            color: #111;
          }
          .exercise-day {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .exercises-list {
            border-top: 1px solid #111;
            border-bottom: 1px solid #111;
            padding: 0.4rem 0.9rem;
            color: #000;
          }
      `}</style>
    <h2>{props.muscle}</h2>
    <div className="exercises-list">
      <ul>
        {props.workoutRoutine.map((workout, i) =>
          <li key={i}>{workout}</li>
        )}
      </ul>
    </div>
    </div>
  );
}
ExerciseDay.propTypes = {
  muscle: PropTypes.string,
  workoutRoutine: PropTypes.array
}
export default ExerciseDay;
