import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import { Link, IndexLink } from 'react-router';

import * as actions from '../store/actions'
import Exercise from './exerciseResource'

class ExercisePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      exercise: this.props.exercise,
    }

    this.delete = (event) => {
      this.props.actions.dispatchAction(Exercise, 'delete', this.state.exercise.id);
    }

    this.save = (event) => {
      this.props.actions.dispatchAction(Exercise, 'update', this.state);
    }
  }



  componentWillReceiveProps(nextProps) {
    if (this.props.exercise.id != nextProps.exercise.id) {
      this.setState({exercise: nextProps.exercise});
    }
  }

  render() {
    return (
      <div id="exercisesPage">
        {this.state.exercise.name}
        <button onClick={this.delete} className='btn btn-danger'>Delete</button>
        <button onClick={this.save} className='btn btn-danger'>Save</button>
      </div>
    )
  }
}

ExercisePage.propTypes = {

}

function mapStateToProps(state, ownProps) { 
  const exercise = findById(state.exercises, ownProps.params.id)
  return {exercise: exercise};
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisePage);

function findById(state, id){
  const collection = Object.assign([], state)
  return collection.filter(obj => obj.id == id)[0]
}