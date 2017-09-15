import React, {Component} from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import moment from 'moment';

function WorkoutSelect({workouts}) {

  const value;

  const loadWorkout = (data) => {
    if (data) {
      browserHistory.push('/workouts/' + data.value)
      value = data.label
    }
  }

  if (workouts.length > 0) {
    options = this.props.workouts.map( (workout, index) => {
      var date = moment(workout.date).format('L')
      return {value: workout.id, label: `${date} - ${workout.name}`}
    })
  }
    
  return (
    <div>
      <Select
        name="form-field-name"
        value={''}
        options={[]}
        onChange={loadWorkout}
      />
    </div>
  )
  
}

export default WorkoutSelect;