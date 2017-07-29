import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ExerciseSet extends Component {

  render(){
    var index = this.props.index;
    
    return (
      
      <div id="exerciseSet">
        <div className='exercise-set' style={ {display: 'inline-block'} }>
          <h3>Set {index + 1}</h3>
          <div>
            <label>Repititions</label>
            <p>
              <input type='text' value={this.props.set.repititions} name='repititions' id={`set_${index+1}`} onChange={this.props.updateSet}/> 
            </p>
          </div>
          <div className='field'>
            <label>Weight</label>
            <p>
              <input type='text' value={this.props.set.weight} name='weight' id={`set_${index+1}`} onChange={this.props.updateSet}/> 
            </p>
          </div> 
        </div>

        <p>
          <button onClick={this.props.removeSet.bind(this, this.props.index)}>Remove Set</button>
        </p>

      </div>
    )
  }

}

ExerciseSet.propTypes = {

}

export default ExerciseSet;