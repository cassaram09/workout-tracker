import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import { Link, IndexLink } from 'react-router';

import {Workout} from '../_store/index'
import StoreHelpers from '../_store/storeHelpers'
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
      this.props.actions.dispatchAction('delete', this.state.workout.id);
    }

    this.save = (event) => {
      event.preventDefault();
      var state = this.state
      debugger
      this.props.actions.dispatchAction('update', this.state);
      this.setState({editing: !this.state.editing})
    }

    this.updateField = (data) => {
      var state = Object.assign({}, this.state)
      var field = Object.keys(data)[0]
      var value = data[field]
      state.workout[field] = value
      state.editing = true;
      return this.setState(state);
    }
  }

  componentDidMount(){
    if (!this.state.workout){
      this.workout.resourceActions.workout_get({id: this.props.params.id}).then( (response) => {
        this.setState({workout: response })
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
    return (
      <div className="workoutsPage">
        <WorkoutForm 
        workout={workout} 
        updateField={this.updateField} />
        {this.state.editing ? <button onClick={this.save} >Save</button> : null}
      </div>
    )
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

