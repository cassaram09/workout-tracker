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
        sets: ''
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
      return item.label.match(value) ? true : false ;
    }
  }

  render(){
    return (
      <div>
        <DropdownButton>
          <MenuItem eventKey="1">Bench Press</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3" active>Active Item</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>

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
   
        <form>
          <TextInput
            name="name"
            label="name"
            value={this.props.exercise.name}
            onChange={this.props.onChange}/>

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
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