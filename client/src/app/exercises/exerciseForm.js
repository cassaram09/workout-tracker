import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/textInput';

import {DropdownButton, MenuItem} from 'react-bootstrap'
import Autocomplete from 'react-autocomplete'

class ExerciseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise:{
        name: '',
        sets: [
          {repititions: 0, id: 0},
        ]
      }
    }

    this.updateExerciseState = (event) => {
      const field = {name: event.target.value};
      return this.setState({exercise: Object.assign({}, this.state.exercise, field)});
    }

    this.selectExercise = (name) => {
      const field = {name: name};
      return this.setState({exercise: Object.assign({}, this.state.exercise, field)});
    }

    this.shouldItemRender = (item, value) => {
      var convertedItem = item.label.toLowerCase()
      var convertedValue = value.toLowerCase()
      return convertedItem.match(convertedValue) ? true : false ;
    }

    this.addSet = () => {
        var length = this.state.exercise.sets.length
        var sets = this.state.exercise.sets
        sets = {sets: [...sets]}
        sets.sets.push({repititions: 0, id: length });
        this.setState({exercise: Object.assign({}, this.state.exercise, sets)});
    }

     this.removeSet = () => {
        var sets = this.state.exercise.sets
        sets =  {sets: [...sets]}
        sets.sets.pop();
        this.setState({exercise: Object.assign({}, this.state.exercise, sets)});
    }

    this.updateSet = (event) =>{
      var id = event.target.id.substr(event.target.id.length - 1);
      var value = event.target.value
      var sets = {sets: [...this.state.exercise.sets]}
      sets.sets[id] = {repititions: value, id: id}
      this.setState({exercise: Object.assign({}, this.state.exercise, sets)});
    }
  }

  render(){
    return (
      <div>
        <Autocomplete
          getItemValue={(item) => item.label}
          items={[
            { label: 'Bench Press' },
            { label: 'Deadlift' },
            { label: 'Squat' }
          ]}
          renderItem={(item, isHighlighted) => {
            return (
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
              </div>
              )
            }
          }
          shouldItemRender={this.shouldItemRender.bind(this)}
          value={this.state.exercise.name}
          onChange={this.updateExerciseState.bind(this)}
          onSelect={this.selectExercise.bind(this)}
        />
   
        <p>
          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </p>

        <div id="dynamicInput">
                       {this.state.exercise.sets.map(set => <input type='text' value={set.repititions} id={`set_${set.id}`} onChange={this.updateSet.bind(this)}/> )}
                   </div>

        <button onClick={this.addSet}>Add Set</button>
        <button onClick={this.removeSet}>Remove Set</button>
      </div>
    )
  }
}

ExerciseForm.propTypes = {
  exercise: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

export default ExerciseForm;