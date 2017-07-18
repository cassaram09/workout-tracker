import React, {Component, PropTypes}  from 'react'
import ExerciseForm from './exerciseForm'

import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import * as exercisesActions from './exercisesActions';


class NewExercisePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      exercise: {
        name: '', 
      }  
    }

    // update cat attributes
    this.updateExerciseState = (event) => {
      const field = event.target.name;
      const exercise = this.state.exercise;
      exercise[field] = event.target.value;
      return this.setState({exercise: exercise});
    }

    this.saveExercise = (event) => {
      event.preventDefault();
      alert('saved!')
      this.props.actions.dispatchAction('createExercise', this.state.exercise)
    }
  }

  render(){
    return (
      <div className="col-md-8 col-md-offset-2">
      {this.props.children}
        <h1>New Exercise</h1>
        <ExerciseForm 
        exercise={this.state.exercise} 
        onSave={this.saveExercise} 
        onChange={this.updateExerciseState} />
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(exercisesActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(NewExercisePage);
