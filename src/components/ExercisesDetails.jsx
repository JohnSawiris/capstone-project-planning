import React from 'react';
import { connect } from 'react-redux';
import v4 from 'uuid/v4';

function ExercisesDetails(props) {
  const { apiExercises} = props;
  console.log(apiExercises);
  if(apiExercises.fetchExercises === true) {
    return(
      <h4>Fetching data</h4>
    );
  } else {
    return(
      <div>
        {
        Object.keys(apiExercises).map((exercise) => {
          console.log(exercise, 'EXERCISE');
          let exerciseEntry = apiExercises[exercise];
          let uniqueID = v4();
          //avoid creating empty div for fetchExercises
          if(exercise !== 'fetchExercises') {
            return <div key={uniqueID} className="exercises-wraper">
              <h3 className="category">Muscle: {exerciseEntry.category}</h3>
              <h4 className="name">Exercise: {exerciseEntry.name}</h4>
              <h5>Description: </h5>
              <p className="description">{exerciseEntry.description}</p>
            </div>
          }
        })
      }
    </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    apiExercises: state.apiExercises
  };
};

export default connect(mapStateToProps)(ExercisesDetails);
