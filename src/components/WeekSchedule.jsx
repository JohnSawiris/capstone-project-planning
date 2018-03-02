import React from 'react';

import ExerciseDay from './ExerciseDay';
import Sidebar from './Sidebar';

import exercises from './../constants/InitialState';

function WeekSchedule() {
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

export default WeekSchedule;
