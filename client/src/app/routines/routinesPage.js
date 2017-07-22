import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import {Button} from 'react-bootstrap'

import Routine from './routineResource'
import RoutinesList from './routinesList'


class RoutinesPage extends Component {
  componentWillMount(){
    this.props.actions.dispatchAction('query')
  }

  render() {
    return (
      <div id="routinesPage">
       <div className="col-md-4">
          <Button bsStyle="default">
            <Link to={"/routines/new"}>New Routine</Link>
          </Button>
          <RoutinesList routines={this.props.routines} />
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
    actions: bindActionCreators({dispatchAction: Routine.dispatchAction}, dispatch)
  }
}

function mapStateToProps(state, ownProps){
  return{
    routines: state.routines
  }
}

RoutinesPage.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RoutinesPage);