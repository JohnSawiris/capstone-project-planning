import React from 'react';

import ExerciseDay from './ExerciseDay';
import Sidebar from './Sidebar';

const exercises = [
  {
    muscle: "Abs",
    workoutRoutine: [
      "Plank",
      "Cruches",
      "Plank Again"
    ]
  },
  {
    muscle: "Shoulders",
    workoutRoutine: [
      "Upright",
      "Front barbell"
    ]
  },
  {
    muscle: "Arm",
    workoutRoutine: [
      "Barbell Curl",
      "Standing Biceps Cable Curl"
    ]
  },
  {
    muscle: "Chest",
    workoutRoutine: [
      "Barbell Bench Press",
      "Dips For Chest"
    ]
  },
  {
    muscle: "Back",
    workoutRoutine: [
      "Barbell Deadlift",
      "Wide-Grip Pull-Up"
    ]
  }
];


function WeekSchedule() {
  return(
    <div className="schedule">
      <style jsx>{`
          .schedule {
            display: flex;
            justify-content: space-between;
            max-width: 1000px;
            margin: 1rem auto;
          }
          .sidebar {
            flex-basis: 24%;
            width: 25%;
            background-color: #000;
            padding: 1rem;
          }
          .main {
            flex-basis: 75%;
            width: 75%;
            padding-left: 1rem;
          }
      `}</style>
      <div className="main">
        {exercises.map((exercise, i) =>
           <ExerciseDay key={i}
                        muscle={exercise.muscle}
                        workoutRoutine={exercise.workoutRoutine} />
            )}
      </div>
      <div className="sidebar">
          <Sidebar />
        </div>
    </div>
  );
}

export default WeekSchedule;
