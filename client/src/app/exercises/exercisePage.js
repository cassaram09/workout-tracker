import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import { Link, IndexLink } from 'react-router';

import * as actions from '../_store/actions'
import Exercise from './exerciseResource'
import StoreHelpers from '../_store/storeHelpers'
import ExerciseForm from './exerciseForm'



class ExercisePage extends Component {
  constructor(props){
    super(props)
    this.exercise = Exercise;

    this.state = {
      exercise: this.props.exercise,
      editing: false
    }

    this.delete = (event) => {
      event.preventDefault();
      return this.props.actions.dispatchAction(Exercise, 'delete', this.state.exercise.id);
    }

    this.saveExercise = (event) => {
      event.preventDefault();
      var state = Object.assign({}, this.state)
      state.exercise.exercise_sets_attributes = state.exercise.exercise_sets
      this.props.actions.dispatchAction(Exercise, 'update', state)
      delete state.exercise.exercise_sets_attributes;
      return this.toggleEdit();
    }

    this.toggleEdit = () => {
      return this.setState({editing: !this.state.editing})
    }

  }

  componentDidMount(){
    if (!this.state.exercise){
      // this.props.actions.dispatchAction(Exercise, 'get', this.props.params.id );
      this.exercise.get(this.props.params.id).then( (response) => {
        this.setState({exercise: response })
        return console.log("GET EXERCISE ON LOAD", response)
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.exercise) {
      if (this.props.exercise.id != nextProps.exercise.id) {
        return this.setState({exercise: nextProps.exercise});
      }
    }
  }

  render() {
    var exercise = this.state.exercise ? this.state.exercise :  {name: "Loading...", exercise_sets: []}

    if (this.state.editing) {
      return (
      <div className="exercisesPage">
        <ExerciseForm exercise={exercise} saveExercise={this.saveExercise} />
        <button onClick={this.toggleEdit} className="btn btn-default">Close</button>
      </div>
      )
    } else {
      var sets = exercise.exercise_sets.map((set, index) => (
        <div>
          {index + 1} {set.repititions} {set.weight}
        </div>
      ))
      return (
        <div id="exercisesPage">
          <h1>{exercise.name}</h1>
          <p>{sets}</p>
          <button onClick={this.toggleEdit} className="btn btn-default">Edit</button>
          <button onClick={this.delete} className='btn btn-danger'>Delete</button>
        </div>
      )
    }
    
  }
}

ExercisePage.propTypes = {

}

function mapStateToProps(state, ownProps) { 
  const exercise = StoreHelpers.findById(state.exercises, ownProps.params.id)
  return {exercise: exercise};
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisePage);

