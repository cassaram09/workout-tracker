import React, {Component} from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import CalendarModal from '../common/calendarModal'
import TimeInput from '../common/timeInput'
import ExerciseForm from '../exercises/exerciseForm'
import {deepClone} from '../utilities/utilities'
import InlineEdit from '../common/inlineEdit';

class WorkoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: this.props.workout
    }

    this.children = []

    this.style = {
      width: '100%',
      display: 'block',
      margin: 0,
      padding: 0,
      fontSize: 15,
      outline: 0,
      border: '1px solid grey'
    }

    this.updateName = (obj) => {
      var state = deepClone(this.state)
      state.workout.name = obj.name
      this.props.update(state)
    }

    this.updateWorkoutField = (value, field) => {
      var state = deepClone(this.state)
      debugger
      state.workout[field] = value
      state.editing = true;
      this.props.update(state)
    }


  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workout) {
      for (let key in this.props.workout) {
        if ( this.props.workout[key] != nextProps.workout[key] ) {
          return this.setState({workout: nextProps.workout});
        }
      }
    }
  }

  render(){

    const date = moment(this.state.workout.date).format('l')
    const start_time = moment(this.state.workout.start_time).format('LT')
    const end_time = moment(this.state.workout.end_time).format('LT')
    var exercises = this.state.workout.exercises.map((exercise, index)=> {
      return ( 
        <ExerciseForm 
          exercise={exercise} 
          update={this.props.update} 
          toggleEdit={this.props.toggleEdit} 
          index={index} 
          parent={this}
        />
      )
    })

    return (
      <div>

        <label>Name</label>
          <InlineEdit value={this.state.workout.name} name={"name"} onChange={this.updateWorkoutField}/>

        <label>Start Time</label>
          <TimeInput updateField={this.updateWorkoutField} value={start_time} name={'start_time'} />

        <label>End Time</label>
          <TimeInput updateField={this.updateWorkoutField}  value={end_time} name={'end_time'}/>

        <label>Date</label>
          <CalendarModal updateField={this.updateWorkoutField} value={date} name={'date'} />

        {exercises}

      </div>
    )
  }
}

WorkoutForm.propTypes = {
  workout: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

export default WorkoutForm;