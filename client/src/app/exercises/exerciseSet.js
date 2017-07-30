import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InlineEdit from 'react-edit-inline';


class ExerciseSet extends Component {
  constructor(){
    super()
    this.style = {
      width: '100%',
      display: 'block',
      margin: 0,
      padding: 0,
      fontSize: 15,
      outline: 0,
      border: '1px solid grey'
    }
  }

  render(){
    const index = this.props.index;
    
    return (   
      <tr>
        <td>Set {index + 1}</td>
        <td>
          <input type='text' value={this.props.set.weight} name='weight' id={`set_${index+1}`} onChange={this.props.updateSet}/> 
        </td>
        <td>
          <input type='text' value={this.props.set.repetitions} name='repititions' id={`set_${index+1}`} onChange={this.props.updateSet}/> 
        </td>
      </tr>
    )
  }

}

ExerciseSet.propTypes = {

}

export default ExerciseSet;

// <h3>Set {index + 1} <button onClick={this.props.removeSet.bind(this, this.props.index)}>X</button> </h3>
