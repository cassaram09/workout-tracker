import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import { Link, IndexLink } from 'react-router';

import {Workout} from '../_store/index'
import StoreHelpers from '../_store/storeHelpers'
import WorkoutForm from './workoutForm'
import ExerciseForm from '../exercises/exerciseForm'

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
      state.workout.exercises_attributes = state.workout.exercises
      var exercises = state.workout.exercises_attributes
      for ( let exercise in exercises ) {
        exercises[exercise].exercise_sets_attributes =  exercises[exercise].exercise_sets
        delete exercises[exercise].exercise_sets
      }
      delete state.workout.exercises
      this.props.actions.dispatchAction('update', state);
      this.setState({editing: false})
    }

    this.saveExercise = (index, event) => {
      event.preventDefault();
      var state = deepClone(this.state)
      state.workout.exercises[index].name = event.target.value;
      this.setState(state)
      this.setState({editing: true})
      // this.props.actions.dispatchAction('update', state)
      return
    }

    this.updateField = (data) => {
      var state = deepClone(this.state)
      var field = Object.keys(data)[0]
      var value = data[field]
      state.workout[field] = value
      state.editing = true;
      return this.setState(state);
    }

    this.changeDate = (date) => {
      var state = deepClone(this.state)
      state.workout.date = date
      state.editing = true;
      return this.setState(state);
    }

    this.changeStartTime = (time) => {
      var state = deepClone(this.state)
      state.workout.start_time = time
      state.editing = true;
      return this.setState(state);
    }

    this.changeEndTime = (time) => {
      var state = deepClone(this.state)
      state.workout.end_time = time
      state.editing = true;
      return this.setState(state);
    }

  }

  componentDidMount(){
    if (!this.state.workout){
      this.workout.resourceActions.workout_get({id: this.props.params.id}).then( (response) => {
        this.setState({workout: response })

        console.log(response)
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
    if (this.state.workout) {

      var exercises = this.state.workout.exercises.map((exercise, index)=> {
        return <ExerciseForm exercise={exercise} save={this.saveExercise} toggleEdit={this.toggleEdit} index={index} />
      })

      return (
        <div className="workoutsPage">
          {this.state.editing ? <button onClick={this.save} >Save</button> : null}
          <WorkoutForm 
            workout={this.state.workout} 
            updateField={this.updateField} 
            changeDate={this.changeDate}
            changeStartTime={this.changeStartTime}
            changeEndTime={this.changeEndTime}
          />

          {exercises}
         
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


// class WorkoutPage extends Component {
//   constructor(props){
//     super(props)
//     this.workout = Workout;
//     this.state = {
//       workout: this.props.workout,
//       editing: false
//     }

//     this.delete = (event) => {
//       event.preventDefault();
//       this.props.actions.dispatchAction('delete', this.state.workout.id);
//     }

//     this.save = (event) => {
//       event.preventDefault();
//       var state = deepClone(this.state)
//       state.workout.exercises_attributes = state.workout.exercises
//       debugger
//       var exercises = state.workout.exercises_attributes
//       for ( let exercise in exercises ) {
//         exercises[exercise].exercise_sets_attributes =  exercises[exercise].exercise_sets
//         delete exercises[exercise].exercise_sets
//       }
//       delete state.workout.exercises
//       this.props.actions.dispatchAction('update', state);
//       this.setState({editing: false})
//     }

//     this.saveExercise = (event) => {
//       event.preventDefault();
//       var state = deepClone(this.state)
//       state.exercise.exercise_sets_attributes = state.exercise.exercise_sets
//       this.props.actions.dispatchAction('update', state)
//       delete state.exercise.exercise_sets_attributes;
//       return
//     }

//     this.updateField = (data) => {
//       var state = Object.assign({}, this.state)
//       var field = Object.keys(data)[0]
//       var value = data[field]
//       state.workout[field] = value
//       state.editing = true;
//       return this.setState(state);
//     }

//     this.changeDate = (date) => {
//       var state = Object.assign({}, this.state)
//       state.workout.date = date
//       state.editing = true;
//       return this.setState(state);
//     }

//     this.changeStartTime = (time) => {
//       var state = Object.assign({}, this.state)
//       state.workout.start_time = time
//       state.editing = true;
//       return this.setState(state);
//     }

//     this.changeEndTime = (time) => {
//       var state = Object.assign({}, this.state)
//       state.workout.end_time = time
//       state.editing = true;
//       return this.setState(state);
//     }

//   }

//   componentDidMount(){
//     if (!this.state.workout){
//       this.workout.resourceActions.workout_get({id: this.props.params.id}).then( (response) => {
//         this.setState({workout: response })

//         console.log(response)
//       })
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     if (this.props.workout) {
//       if (this.props.workout.id != nextProps.workout.id) {
//         this.setState({workout: nextProps.workout});
//       }
//     }
//   }

//   render() {
//     if (this.state.workout) {




//       var exercises = this.state.workout.exercises.map(exercise => {
//         return <ExerciseForm exercise={exercise} save={this.saveExercise} />
//       })

//       return (
//         <div className="workoutsPage">
//           <WorkoutForm 
//             workout={this.state.workout} 
//             updateField={this.updateField} 
//             changeDate={this.changeDate}
//             changeStartTime={this.changeStartTime}
//             changeEndTime={this.changeEndTime}
//           />

//           {exercises}
//           {this.state.editing ? <button onClick={this.save} >Save</button> : null}
//         </div>
//       )



//     } else {

//       return (
//         <div className="workoutsPage">
//           <h2>Loading...</h2>
//         </div>
//       )

//     }
    
//   }
// }

// WorkoutPage.propTypes = {

// }

// function mapStateToProps(state, ownProps) { 
//   const workout = StoreHelpers.findById(state.workouts, ownProps.params.id)
//   return {workout: workout};
// };

// function mapDispatchToProps(dispatch){
//   return {
//     actions: bindActionCreators({dispatchAction: Workout.dispatchAction}, dispatch)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPage);
