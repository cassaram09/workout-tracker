import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import { Link, IndexLink } from 'react-router';

import * as actions from '../store/actions'
import Workout from './workoutResource'
import StoreHelpers from '../store/storeHelpers'
import WorkoutForm from './workoutForm'



class WorkoutPage extends Component {
  constructor(props){
    super(props)
    this.workout = Workout;
    this.state = {
      workout: this.props.workout,
      editing: false
    }

    this.delete = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction(Workout, 'delete', this.state.workout.id);
    }

    this.save = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction(Workout, 'update', this.state);
      this.setState({editing: !this.state.editing})
    }

     this.toggleEdit = () => {
      this.setState({editing: !this.state.editing})
    }

     this.updateWorkoutState = (event) => {
      const field = event.target.name;
      const workout = this.state.workout;
      workout[field] = event.target.value;
      return this.setState({workout: workout});
    }
  }

  componentDidMount(){
    if (!this.state.workout){
      // this.props.actions.dispatchAction(Workout, 'get', this.props.params.id );
      this.workout.get(this.props.params.id).then( (response) => {
        this.setState({workout: response })
        console.log("GET EXERCISE ON LOAD", response)
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
    var workout = this.state.workout ? this.state.workout :  {name: "Loading..."}

    if (this.state.editing) {
      return (
      <div className="workoutsPage">
        <WorkoutForm 
        workout={this.state.workout} 
        onSave={this.save} 
        onChange={this.updateWorkoutState} />
      </div>
      )
    } else {
      return (
        <div id="workoutsPage">
          <h1>{workout.name}</h1>
          <button onClick={this.toggleEdit} 
            className="btn btn-default">edit
          </button>
           <button onClick={this.delete} className='btn btn-danger'>Delete</button>
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
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPage);

