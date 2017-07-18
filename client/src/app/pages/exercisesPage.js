import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import newExercisePage from '../exercises/newExercisePage';


class ExercisesPage extends Component {
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

ExercisesPage.propTypes = {

}

export default ExercisesPage;