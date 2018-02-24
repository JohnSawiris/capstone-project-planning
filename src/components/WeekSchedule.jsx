import React from 'react';

import ExerciseDay from './ExerciseDay';
import Sidebar from './Sidebar';

const exercises = [
  {
    muscle: "Abs",
    workoutRoutine: [
      "Plank",
      "Cruches"
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
            margin: 0 auto;
          }
          .sidebar {
            flex-basis: 24%;
            width: 25%;
            background-color: #111;
            padding: 1rem;
          }
          .main {
            flex-basis: 74%;
            width: 75%;
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
