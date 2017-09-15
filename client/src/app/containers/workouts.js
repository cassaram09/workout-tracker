import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import {Button} from 'react-bootstrap'
import Workout from './workoutResource'
import WorkoutCard from './workoutCard'
import WorkoutSelect from './workoutSelect'


class WorkoutsPage extends Component {
  componentWillMount(){
    this.props.actions.dispatchAction('query')
  }



  render() {
  
    
    return (
      <div id="workoutsPage">
       <div className="col-md-4">
          <Button bsStyle="default">
            <Link to={"/workouts/new"}>New Workout</Link>
          </Button>
           <WorkoutSelect workouts={this.props.workouts}/>
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
    actions: bindActionCreators({dispatchAction: Workout.dispatchAction}, dispatch)
  }
}

function mapStateToProps(state, ownProps){
  return{
    workouts: state.workouts
  }
}

WorkoutsPage.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsPage);