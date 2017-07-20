import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import ExerciseForm from './exerciseForm'
import Exercise from './exerciseResource'
import * as actions from '../_store/actions'



class NewExercisePage extends Component {
  constructor(){
    super()
    this.state = {
      exercise: {
        name: '', 
        exercise_sets: [
          {repititions: 0, id: 0, weight: 0},
        ]
      }
    }

    this.createExercise = (event) => {
      event.preventDefault();
      var state = Object.assign({}, this.state)
      state.exercise.exercise_sets_attributes = state.exercise.exercise_sets
      delete state.exercise.exercise_sets;
      this.props.actions.dispatchAction(Exercise, 'create', state)
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
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewExercisePage);

