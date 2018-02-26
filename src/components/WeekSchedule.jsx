import React from 'react';

import ExerciseDay from './ExerciseDay';
import Sidebar from './Sidebar';

// Mimic firbase data
const exercises = {
  "Abs": {
    muscle: "Abs",
    workoutRoutine: [
      "Plank",
      "Cruches",
      "Plank Again"
    ]
  },
  "Shoulders": {
    muscle: "Shoulders",
    workoutRoutine: [
      "Upright",
      "Front barbell"
    ]
  },
  "Arm": {
    muscle: "Arm",
    workoutRoutine: [
      "Barbell Curl",
      "Standing Biceps Cable Curl"
    ]
  },
  "Chest": {
    muscle: "Chest",
    workoutRoutine: [
      "Barbell Bench Press",
      "Dips For Chest"
    ]
  },
  "Back": {
    muscle: "Back",
    workoutRoutine: [
      "Barbell Deadlift",
      "Wide-Grip Pull-Up"
    ]
  }
};


function WeekSchedule() {
  return(
    <div className="schedule">
      <style jsx>{`
          .schedule {
            display: flex;
            justify-content: space-around;
            max-width: 1000px;
            margin: 1rem auto;
          }
          .sidebar {
            flex-basis: 24%;
            width: 24%;
            background-color: rgba(0, 0, 0, 0.8);
            padding: 1rem;
            border-radius: 0.25rem;
            height: 100%;
          }
          .main {
            flex-basis: 74%;
            width: 74%;
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
