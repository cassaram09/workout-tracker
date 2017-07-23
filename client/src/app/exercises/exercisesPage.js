import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import {Button} from 'react-bootstrap'
import {Exercise} from '../_store/index'
import ExercisesList from './exercisesList'

class ExercisesPage extends Component {
  componentWillMount(){
    this.props.actions.dispatchAction('query')
  }

  render() {
    return (
      <div id="exercisesPage">
       <div className="col-md-4">
          <Button bsStyle="default">
            <Link to={"/exercises/new"}>New Exercise</Link>
          </Button>
          <ExercisesList exercises={this.props.exercises} />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: Exercise.dispatchAction}, dispatch)
  }
}

function mapStateToProps(state, ownProps){
  return{
    exercises: state.exercises
  }
}

ExercisesPage.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesPage);