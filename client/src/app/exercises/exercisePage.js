import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import { Link, IndexLink } from 'react-router';

import * as actions from '../store/actions'
import Exercise from './exerciseResource'
import StoreHelpers from '../store/storeHelpers'
import ExerciseForm from './exerciseForm'



class ExercisePage extends Component {
  constructor(props){
    super(props)
    this.exercise = Exercise;
    this.state = {
      exercise: this.props.exercise,
      editing: false
    }

    this.delete = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction(Exercise, 'delete', this.state.exercise.id);
    }

    this.save = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction(Exercise, 'update', this.state);
      this.setState({editing: !this.state.editing})
    }

     this.toggleEdit = () => {
      this.setState({editing: !this.state.editing})
    }

     this.updateExerciseState = (event) => {
      const field = event.target.name;
      const exercise = this.state.exercise;
      exercise[field] = event.target.value;
      return this.setState({exercise: exercise});
    }
  }

  componentDidMount(){
    if (!this.state.exercise){
      // this.props.actions.dispatchAction(Exercise, 'get', this.props.params.id );
      this.exercise.get(this.props.params.id).then( (response) => {
        this.setState({exercise: response })
        console.log("GET EXERCISE ON LOAD", response)
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.exercise) {
      if (this.props.exercise.id != nextProps.exercise.id) {
        this.setState({exercise: nextProps.exercise});
      }
    }
  }

  render() {
    var exercise = this.state.exercise ? this.state.exercise :  {name: "Loading..."}

    if (this.state.editing) {
      return (
      <div className="exercisesPage">
        <ExerciseForm 
        exercise={this.state.exercise} 
        onSave={this.save} 
        onChange={this.updateExerciseState} />
      </div>
      )
    } else {
      return (
        <div id="exercisesPage">
          <h1>{exercise.name}</h1>
          <button onClick={this.toggleEdit} 
            className="btn btn-default">edit
          </button>
           <button onClick={this.delete} className='btn btn-danger'>Delete</button>
        </div>
      )
    }
    
  }
}

ExercisePage.propTypes = {

}

function mapStateToProps(state, ownProps) { 
  const exercise = StoreHelpers.findById(state.exercises, ownProps.params.id)
  return {exercise: exercise};
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisePage);

