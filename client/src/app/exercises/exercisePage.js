import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import { Link, IndexLink } from 'react-router';

class ExercisePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      exercise: this.props.exercise,
    }
  }

  render() {
    return (
      <div id="exercisesPage">
        {this.state.exercise.name}
      </div>
    )
  }
}

ExercisePage.propTypes = {

}

function mapStateToProps(state, ownProps) { 
  const exercise = findById(state.exercise, ownProps.params.id)
  return {exercise: exercise};
};

export default connect(mapStateToProps)(ExercisePage);

function findById(state, id){
  const collection = Object.assign([], state)
  return collection.filter(obj => obj.id == id)[0]
}