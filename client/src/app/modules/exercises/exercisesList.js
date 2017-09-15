import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

function exercisesList({exercises}) {
  return(
    <ul className='list-group'>
      {exercises.map(exercise => (
        <li className="list-group-item" key={exercise.id}>
          <Link to={`/exercises/${exercise.id}`}>{exercise.name}</Link>
        </li>
      ))}
    </ul>
  )
};


// validate properties
exercisesList.propTypes = {
  exercises: PropTypes.array.isRequired
}

export default exercisesList;