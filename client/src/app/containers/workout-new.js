import React, {Component} from 'react';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';
import moment from 'moment';

import {deepClone} from '../utils/tools'
import {Workout} from '../modules/workouts/workoutResource';
import {WorkoutForm} from '../modules/workouts/workoutForm';

class NewWorkout extends Component {
  constructor(props){
    super(props)

    this.end_time = new Date().getHours() + 1  + ':' + new Date().getMinutes()
    this.start_time = new Date().getHours() + ':' + new Date().getMinutes()

    this.state ={
      workout: {
        name: '',
        date: new Date(),
        end_time: this.end_time,
        start_time: this.start_time,
        exercises: []
      }
    }

    this.update = (value) => {
      var state = deepClone(this.state)
      state.workout = value
      return this.setState(state);
    }

    this.save = (state) => {
      return this.props.actions.dispatchAction('create', state);
    }
  }

  render() {
    return (
      <div className="newWorkout">
        <WorkoutForm  workout={this.state.workout} update={this.update} save={this.save} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({dispatchAction: Workout.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewWorkout);