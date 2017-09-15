import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import moment from 'moment'

const workoutsList = ({workouts}) => {
  return(
    <ul className='list-group'>
      {workouts.map(workout => {
        var date = moment(workout.date).format('l')
        return (
          <li className="list-group-item" key={workout.id}>
            <Link to={`/workouts/${workout.id}`}>{date} - {workout.name}</Link>
          </li> 
        )
      })}
    </ul>
  )
};

workoutsList.propTypes = {
  workouts: PropTypes.array.isRequired
}

export default workoutsList;