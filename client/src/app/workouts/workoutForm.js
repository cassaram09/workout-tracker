import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Table} from 'react-bootstrap'
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
      state.workout[field] = value
      state.editing = true;
      this.props.update(state)
    }

    this.addExercise = () =>{
      var state = deepClone(this.state)
      state.workout.exercises.push({name: '', weight: '', repetitions: '', exercise_sets: []})
      this.setState(state)
    }

    this.updateExercise = (exercise, index) => {
      var state = deepClone(this.state)
      state.workout.exercises[index] = exercise;
      state.editing = true;
      this.props.update(state)
    }

    this.removeExercise = (index) =>{
      var state = deepClone(this.state)
      state.workout.exercises.splice(index, 1)
      this.props.update(state);
    }

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workout) {
      // for (let key in this.props.workout) {
      //   if ( this.props.workout[key] != nextProps.workout[key] ) {
          return this.setState({workout: nextProps.workout});
      //   }
      // }
    }
  }

  render(){

    const date = moment(this.state.workout.date).format('l')
    const { start_time, end_time, name } = this.state.workout

    var exercises = this.state.workout.exercises.map((exercise, index)=> {
      return ( 
        <ExerciseForm 
          exercise={exercise} 
          updateExercise={this.updateExercise} 
          removeExercise={this.removeExercise}
          toggleEdit={this.props.toggleEdit} 
          index={index} 
        />
      )
    })

    return (

      <div className='workoutForm'>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Start</th>
              <th>Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <InlineEdit value={name} name={"name"} onChange={this.updateWorkoutField}/>
              </td>
              <td>
                <CalendarModal updateField={this.updateWorkoutField} value={date} name={'date'} />
              </td>
              <td>
                <TimeInput updateField={this.updateWorkoutField} value={start_time} name={'start_time'} />
              </td>
              <td>
                <TimeInput updateField={this.updateWorkoutField}  value={end_time} name={'end_time'}/>
              </td>
            </tr>
          </tbody>
        </Table>

        <button onClick={this.addExercise}>Add Exercise</button>
        
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

 // <div>
 //        <Row>
 //          <Col xs={12} md={3}>
 //            <label>Name</label>
            
 //          </Col>
 //          <Col  xs={12} md={3} >
 //            <label>Start Time</label>
            
 //          </Col>
 //          <Col  xs={12} md={3} >
 //            <label>End Time</label>
            
 //          </Col>
 //          <Col  xs={12} md={3} >
 //            <label>Date</label>
            
 //          </Col>
 //        </Row>
 //        <Row>
          
 //        </Row>
 //      </div>