import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import TextInput from '../common/textInput';

import {DropdownButton, MenuItem} from 'react-bootstrap'
import Autocomplete from 'react-autocomplete'

import {Exercise} from '../_store/index'
import ExerciseSet from './exerciseSet'



class ExerciseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: this.props.exercise
    }

    // this.saveExercise = (event) => {
    //   event.preventDefault();
    //   var state = Object.assign({}, this.state)
    //   state.exercise.exercise_sets_attributes = state.exercise.exercise_sets
    //   this.props.actions.dispatchAction('update', state)
    //   delete state.exercise.exercise_sets_attributes;
    //   return
    // }

    this.updateExerciseName = (event) => {
      var state = Object.assign({}, this.state)
      state.exercise.name = event.target.value
      return this.setState(state);
    }

    this.selectExerciseName = (name) => {
      var state = Object.assign({}, this.state)
      state.exercise.name = name
      return this.setState(state);
    }

    this.shouldItemRender = (item, value) => {
      var convertedItem = item.label.toLowerCase()
      var convertedValue = value.toLowerCase()
      return convertedItem.match(convertedValue) ? true : false ;
    }

    this.addSet = () => {
      var state = Object.assign({}, this.state)
      var sets = state.exercise.exercise_sets
      sets.push({repititions: 0, set_id: sets.length, weight: 0 });
      return this.setState(state);
    }

    this.removeSet = () => {
      var state = Object.assign({}, this.state)
      state.exercise.exercise_sets.pop()
      return this.setState(state);
    }

    this.updateSet = (event) =>{
      var id = event.target.id.substr(event.target.id.length - 1);
      id = parseInt(id, 10) - 1
      var name = event.target.name
      var value = event.target.value
      var state = Object.assign({}, this.state)
      state.exercise.exercise_sets[id][name] = value
      return this.setState(state);
    }
    
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.exercise) {
      if (this.props.exercise.name != nextProps.exercise.name) {
        return this.setState({exercise: nextProps.exercise});
      }
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
          renderItem={(item, isHighlighted) => 
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.label}
            </div>
          }
          shouldItemRender={this.shouldItemRender}
          value={this.state.exercise.name}
          onChange={this.updateExerciseName}
          onSelect={this.selectExerciseName}
        />
   
        <ExerciseSet exercise={this.state.exercise} updateSet={this.updateSet} removeSet={this.removeSet} addSet={this.addSet} />

        <p>
          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.props.save}
          />
        </p>

      </div>
    )
  }
}

ExerciseForm.propTypes = {
  exercise: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: Exercise.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ExerciseForm);