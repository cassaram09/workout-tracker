import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import { Link, IndexLink } from 'react-router';

import Routine from './routineResource'
import StoreHelpers from '../store/storeHelpers'
import RoutineForm from './routineForm'



class RoutinePage extends Component {
  constructor(props){
    super(props)
    this.routine = Routine;
    this.state = {
      routine: this.props.routine,
      editing: false
    }

    this.delete = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction('delete', this.state.routine.id);
    }

    this.save = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction('update', this.state);
      this.setState({editing: !this.state.editing})
    }

     this.toggleEdit = () => {
      this.setState({editing: !this.state.editing})
    }

     this.updateRoutineState = (event) => {
      const field = event.target.name;
      const routine = this.state.routine;
      routine[field] = event.target.value;
      return this.setState({routine: routine});
    }
  }

  componentDidMount(){
    if (!this.state.routine){
      // this.props.actions.dispatchAction(Routine, 'get', this.props.params.id );
      this.routine.get(this.props.params.id).then( (response) => {
        this.setState({routine: response })
        console.log("GET EXERCISE ON LOAD", response)
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.routine) {
      if (this.props.routine.id != nextProps.routine.id) {
        this.setState({routine: nextProps.routine});
      }
    }
  }

  render() {
    var routine = this.state.routine ? this.state.routine :  {name: "Loading..."}

    if (this.state.editing) {
      return (
      <div className="routinesPage">
        <RoutineForm 
        routine={this.state.routine} 
        onSave={this.save} 
        onChange={this.updateRoutineState} />
      </div>
      )
    } else {
      return (
        <div id="routinesPage">
          <h1>{routine.name}</h1>
          <button onClick={this.toggleEdit} 
            className="btn btn-default">edit
          </button>
           <button onClick={this.delete} className='btn btn-danger'>Delete</button>
        </div>
      )
    }
    
  }
}

RoutinePage.propTypes = {

}

function mapStateToProps(state, ownProps) { 
  const routine = StoreHelpers.findById(state.routines, ownProps.params.id)
  return {routine: routine};
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: Routine.dispatchAction}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutinePage);

