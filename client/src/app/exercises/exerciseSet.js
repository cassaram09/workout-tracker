import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ExerciseSet extends Component {

  render(){

    var sets = this.props.exercise.exercise_sets_attributes.map(set => { 
      return (
        <div className='exercise-set' style={ {display: 'inline-block'} }>
          <h3>Set {set.id + 1}</h3>
          <div>
            <label>Repititions</label>
            <p>
              <input type='text' value={set.repititions} name='repititions' id={`set_${set.id}`} onChange={this.props.updateSet}/> 
            </p>
          </div>
          <div className='field'>
            <label>Weight</label>
            <p>
              <input type='text' value={set.weight} name='weight' id={`set_${set.id}`} onChange={this.props.updateSet}/> 
            </p>
          </div> 
        </div>
      )
    })

    return (
      <div id="exerciseSet">

        {sets}

        <p>
          <button onClick={this.props.addSet}>Add Set</button>
          <button onClick={this.props.removeSet}>Remove Set</button>
        </p>

      </div>
    )
  }

}

ExerciseSet.propTypes = {

}

export default ExerciseSet;