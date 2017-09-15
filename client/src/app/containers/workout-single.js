import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import {Workout} from '../store/index'
import StoreHelpers from '../store/storeHelpers'
import WorkoutForm from './workoutForm'
import moment from 'moment';

import {deepClone} from '../utilities/utilities'

class WorkoutPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      workout: this.props.workout,
    }

    this.delete = (event) => {
      event.preventDefault();
      return this.props.actions.dispatchAction('delete', this.state.workout.id);
    }

    this.update = (value) => {
      var state = deepClone(this.state)
      state.workout = value
      return this.setState(state);
    }

    this.save = (state) => {
      return this.props.actions.dispatchAction('update', state);
    }

  }

  componentDidMount(){
    if (!this.state.workout){
      Workout.resourceActions.workout_get({id: this.props.params.id}).then( (response) => {
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
    if (this.state.workout) {
      return (
        <div className="workoutsPage">
          <WorkoutForm workout={this.state.workout} update={this.update}save={this.save} />
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
  var workout = StoreHelpers.findById(state.workouts, ownProps.params.id)
  return {workout: workout};
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: Workout.dispatchAction}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPage);
