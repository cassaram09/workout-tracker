import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import WorkoutForm from './workoutForm'
import * as actions from '../store/actions'
import Workout from './workoutResource'

class NewWorkoutPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      workout: {
        name: '', 
      }  
    }

    this.updateWorkoutState = (event) => {
      const field = event.target.name;
      const workout = this.state.workout;
      workout[field] = event.target.value;
      return this.setState({workout: workout});
    }

    this.saveWorkout = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction(Workout, 'create', this.state)
    }
  }

  render(){
    return (
      <div className="col-md-8 col-md-offset-2">
      {this.props.children}
        <h1>New Workout</h1>
        <WorkoutForm 
        workout={this.state.workout} 
        onSave={this.saveWorkout} 
        onChange={this.updateWorkoutState} />
      </div>
    )
  }
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewWorkoutPage);
