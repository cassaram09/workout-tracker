import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import ExerciseForm from './exerciseForm'
import {Exercise} from '../store/index'

class NewExercisePage extends Component {
  constructor(){
    super()
    this.state = {
      exercise: {
        name: '', 
        exercise_sets: [
          {repititions: 0, set_id: 0, weight: 0},
        ]
      }
    }

    this.createExercise = (event) => {
      event.preventDefault();
      var state = Object.assign({}, this.state)
      state.exercise.exercise_sets_attributes = state.exercise.exercise_sets
      delete state.exercise.exercise_sets;
      return this.props.actions.dispatchAction('create', state)
    }

  }
  render(){
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>New Exercise</h1>
        <ExerciseForm exercise={this.state.exercise} saveExercise={this.createExercise} />
      </div>
    )
  }
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: Exercise.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewExercisePage);

