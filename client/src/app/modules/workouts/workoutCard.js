import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import moment from 'moment'

const workoutCard = ({workout}) => {
  var date = moment(workout.date).format('l')
  return(
    <Link to={`/workouts/${workout.id}`}>
      <div className='workout-card' style={{border: '1px dotted blue'}}>
        <h4>{date} - {workout.name}</h4
        >
        <p>{workout.exercises.length} Exercises</p>
      </div>
    </Link>
  )
};

workoutCard.propTypes = {
  workout: PropTypes.object.isRequired
}

export default workoutCard;