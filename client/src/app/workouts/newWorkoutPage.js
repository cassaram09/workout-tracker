import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import {Workout} from '../store/index'
import WorkoutForm from './workoutForm'
import moment from 'moment';

import {deepClone} from '../utilities/utilities'

class NewWorkoutPage extends Component {
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
      <div className="newWorkoutPage">
        <WorkoutForm  workout={this.state.workout} update={this.update} save={this.save} />
      </div>
    )
  }
}

NewWorkoutPage.propTypes = {

}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: Workout.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewWorkoutPage);