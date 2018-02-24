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
    <div>
      <Sidebar />
      {exercises.map((exercise, i) =>
         <ExerciseDay key={i}
                      muscle={exercise.muscle}
                      workoutRoutine={exercise.workoutRoutine} />
          )}
    </div>
  );
}

export default WeekSchedule;
