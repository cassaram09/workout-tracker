import React, {Component, PropTypes}  from 'react'
import ExerciseForm from './exerciseForm'

import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import Resource from '../api/resource'

const Exercise = new Resource('exercise', '/exercises')

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
      Exercise.dispatchAction('create', this.state.exercise)
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

export default NewExercisePage;
