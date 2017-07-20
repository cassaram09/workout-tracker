// component for rendering list of cats for user

import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';


const routinesList = ({routines}) => {
  return(

    <ul className='list-group'>
      {routines.map(routine => (
        <li className="list-group-item" key={routine.id}>
          <Link to={`/routines/${routine.id}`}>{routine.name}</Link>
        </li>
      ))}
    </ul>
  )
};


// validate properties
routinesList.propTypes = {
  routines: PropTypes.array.isRequired
}

export default routinesList;