import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import {Button} from 'react-bootstrap';

import Workout from '../modules/workout/workoutResource';
import WorkoutCard from '../modules/workouts/workoutCard';
import WorkoutSelect from '../modules/workouts/workoutSelect';

class Workouts extends Component {

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

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({dispatchAction: Workout.dispatchAction}, dispatch)
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    workouts: state.workouts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workouts);