import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ExerciseSet extends Component {

  render(){
    const index = this.props.index;
    
    return (   
      <div id="exerciseSet">

        <h3>Set {index + 1} <button onClick={this.props.removeSet.bind(this, this.props.index)}>X</button> </h3>
         
        <div>
          <label>Repititions</label>
          <input type='text' value={this.props.set.repetitions} name='repititions' id={`set_${index+1}`} onChange={this.props.updateSet}/> 
        </div>
        <div className='field'>
          <label>Weight</label>
          <input type='text' value={this.props.set.weight} name='weight' id={`set_${index+1}`} onChange={this.props.updateSet}/> 
        </div> 
      </div>
    )
  }

}

ExerciseSet.propTypes = {

}

export default ExerciseSet;


