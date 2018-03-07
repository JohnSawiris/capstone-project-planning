import React from 'react';
import { connect } from 'react-redux';

function ExercisesDetails(props) {
  const { apiExercises} = props;
  console.log(apiExercises.category);
  // console.log(apiExercises.fetchExercises);
  if(apiExercises.fetchExercises === true) {
    return(
      <h4>Fetching data</h4>
    );
  } else {
    return(
      <div>
        {
        Object.keys(apiExercises).map((exercise) => {
          let exerciseEntry = apiExercises[exercise];
          return <div>
            <h3>{exerciseEntry.category}</h3>
            <h4>{exerciseEntry.name}</h4>
            <p>{exerciseEntry.description}</p>
          </div>
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
