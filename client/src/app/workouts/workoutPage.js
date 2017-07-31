import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import { Link, IndexLink } from 'react-router';

import {Workout} from '../_store/index'
import StoreHelpers from '../_store/storeHelpers'
import WorkoutForm from './workoutForm'
import moment from 'moment';

import {deepClone} from '../utilities/utilities'

class WorkoutPage extends Component {
  constructor(props){
    super(props)
    this.workout = Workout;
    this.state = {
      workout: this.props.workout,
      editing: false
    }

    this.toggleEdit = () =>{
      this.setState({editing: true})
    }

    this.delete = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction('delete', this.state.workout.id);
    }

    this.save = (event) => {
      event.preventDefault();
      var state = deepClone(this.state)

      state.workout.date = moment(state.workout.date).unix();
      state.workout.start_time = moment(state.workout.start_time, "HH:mm aA").unix();
      state.workout.end_time = moment(state.workout.end_time, "HH:mm aA").unix();

      state.workout.exercises_attributes = state.workout.exercises
      var exercises = state.workout.exercises_attributes
      for ( let exercise in exercises ) {
        exercises[exercise].exercise_sets_attributes =  exercises[exercise].exercise_sets
        delete exercises[exercise].exercise_sets
      }
      delete state.workout.exercises

      this.props.actions.dispatchAction('update', state);
      return this.setState({editing: false})
    }

    this.updateExerciseSet = (value, field, index) => {
      var state = deepClone(this.state)
      state.workout.exercises[index][field] = value;
      this.setState(state)
      return this.setState({editing: true})
    }

    this.updateWorkoutField = (value, field) => {
      var state = deepClone(this.state)
      state.workout[field] = value
      state.editing = true;
      return this.setState(state);
    }

    this.update = (value) => {

      var state = deepClone(this.state)
      state.workout = value
      state.editing = true;
      return this.setState(state);
    }

  }

  componentDidMount(){
    if (!this.state.workout){
      this.workout.resourceActions.workout_get({id: this.props.params.id}).then( (response) => {
        this.setState({workout: response})
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workout) {
      if (this.props.workout.id != nextProps.workout.id) {
        this.setState({workout: nextProps.workout});
      }
    }
  }

  render() {
    console.log(this.state.workout)
    if (this.state.workout) {
      return (
        <div className="workoutsPage">
          {this.state.editing ? <button onClick={this.save} >Save</button> : null}
          <WorkoutForm 
            workout={this.state.workout} 
            toggleEdit={this.toggleEdit} 
            update={this.update}
          />
        </div>
      )
    } else {
      return (
        <div className="workoutsPage">
          <h2>Loading...</h2>
        </div>
      )
    }
    
  }
}

WorkoutPage.propTypes = {

}

function mapStateToProps(state, ownProps) { 
  const workout = StoreHelpers.findById(state.workouts, ownProps.params.id)

  return {workout: workout};
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: Workout.dispatchAction}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPage);
