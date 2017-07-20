import React, {Component}  from 'react'
import PropTypes from 'prop-types';

import ExerciseForm from './exerciseForm'

class NewExercisePage extends Component {

  render(){
    var exercise = {
      exercise: {
        name: '', 
        exercise_sets_attributes: [
          {repititions: 0, id: 0, weight: 0},
        ]
      }  
    }

    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>New Exercise</h1>
        <ExerciseForm exercise={exercise} />
      </div>
    )
  }
};

export default NewExercisePage;
