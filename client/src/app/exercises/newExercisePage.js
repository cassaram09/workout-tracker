import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import {DropdownButton} from 'react-bootstrap'

import ExerciseForm from './exerciseForm'
import * as actions from '../_store/actions'
import Exercise from './exerciseResource'

class NewExercisePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      exercise: {
        name: '', 
      }  
    }

    this.updateExerciseState = (event) => {
      const field = event.target.name;
      const exercise = this.state.exercise;
      exercise[field] = event.target.value;
      return this.setState({exercise: exercise});
    }

    this.saveExercise = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction(Exercise, 'create', this.state)
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

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewExercisePage);
