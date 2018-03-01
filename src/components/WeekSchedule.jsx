import React from 'react';

import ExerciseDay from './ExerciseDay';
import Sidebar from './Sidebar';

import exercises from './../constants/InitialState';

function WeekSchedule() {
  return(
    <div className="schedule">
      <style jsx>{`
          .schedule {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            max-width: 1000px;
            margin: 1rem auto;
          }
          .sidebar {
            order: 0;
            flex-basis: 100%;
            width: 100%;
            padding: 1rem;
            border-radius: 0.25rem;
          }
          .main {
            order: 1;
            flex-basis: 98%;
            width: 98%;
            margin: auto;
          }
      `}</style>
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
