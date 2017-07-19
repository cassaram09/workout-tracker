import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';


const workoutsList = ({workouts}) => {
  return(
    <ul className='list-group'>
      {workouts.map(workout => (
        <li className="list-group-item" key={workout.id}>
          <Link to={`/workouts/${workout.id}`}>{workout.name}</Link>
        </li>
      ))}
    </ul>
  )
};


// validate properties
workoutsList.propTypes = {
  workouts: PropTypes.array.isRequired
}

export default workoutsList;