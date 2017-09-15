import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';
import moment from 'moment'
import Select from 'react-select';
import { browserHistory} from 'react-router';
import 'react-select/dist/react-select.css';

class WorkoutSelect extends Component {
  constructor(props){
    super(props)

    this.loadWorkout = (data) => {
      if (data) {
        browserHistory.push('/workouts/' + data.value)
        this.value = data.label
      }
    }
  }
  
  render(){
    var options = [];
    if (this.props.workouts.length > 0) {
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
          options={options}
          onChange={this.loadWorkout}
        />
      </div>
    )
  }
  
}



export default WorkoutSelect;