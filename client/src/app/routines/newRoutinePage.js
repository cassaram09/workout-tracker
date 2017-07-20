import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import RoutineForm from './routineForm'
import * as actions from '../_store/actions'
import Routine from './routineResource'

class NewRoutinePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      routine: {
        name: '', 
      }  
    }

    this.updateRoutineState = (event) => {
      const field = event.target.name;
      const routine = this.state.routine;
      routine[field] = event.target.value;
      return this.setState({routine: routine});
    }

    this.saveRoutine = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction(Routine, 'create', this.state)
    }
  }

  render(){
    return (
      <div className="col-md-8 col-md-offset-2">
      {this.props.children}
        <h1>New Routine</h1>
        <RoutineForm 
        routine={this.state.routine} 
        onSave={this.saveRoutine} 
        onChange={this.updateRoutineState} />
      </div>
    )
  }
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewRoutinePage);
