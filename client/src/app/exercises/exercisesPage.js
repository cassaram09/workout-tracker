import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import * as actions from '../store/actions'
import Exercise from './exerciseResource'

class ExercisesPage extends Component {
  componentWillMount(){
    this.props.actions.dispatchAction(Exercise, 'query', null)
  }

  render() {
    return (
      <div id="exercisesPage">
        I'm the exercises page!
        <Link to={"/exercises/new"} activeClassName="active">New Exercise</Link>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

ExercisesPage.propTypes = {

}

export default connect(null, mapDispatchToProps)(ExercisesPage);