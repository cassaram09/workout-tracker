import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import TextInput from '../common/textInput';

import {DropdownButton, MenuItem, Grid, Row, Col, Table} from 'react-bootstrap'
import Autocomplete from 'react-autocomplete'

import {Exercise} from '../_store/index'
import ExerciseSet from './exerciseSet'
import InlineEdit from 'react-edit-inline';


import {deepClone} from '../utilities/utilities'

class ExerciseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: this.props.exercise,
      items: [{ label: 'Bench Press' }, { label: 'Deadlift' }, { label: 'Squat' } ]
    }

    this.children = ['car']

    this.style = {
      width: '100%',
      display: 'block',
      height: '20px',
      margin: 0,
      padding: 0,
      fontSize: 15,
      outline: 0,
      border: '1px solid grey'
    }

    this.updateName = (event) => {
      var exercise = deepClone(this.state.exercise);
      exercise.name = event.target.value;
      this.props.updateExercise(exercise, this.props.index)
    }

    this.selectName = (value) => {
      var exercise = deepClone(this.state.exercise);
      exercise.name = value;
      this.props.updateExercise(exercise, this.props.index)
    }

    this.shouldItemRender = (item, value) => {
      if ( !item || !value ){
        return
      }
      var convertedItem = item.label.toLowerCase()
      var convertedValue = value.toLowerCase()
      return convertedItem.match(convertedValue) ? true : false ;
    }

    this.addSet = () => {
      var exercise = deepClone(this.state.exercise)
      var sets = exercise.exercise_sets
      sets.push({repetitions: 0, set_id: sets.length, weight: 0 });
      this.props.toggleEdit();
      this.props.updateExercise(exercise, this.props.index)
    }

    this.removeSet = () => {
      var exercise = deepClone(this.state.exercise)
      exercise.exercise_sets.pop()
      this.props.toggleEdit();
      this.props.updateExercise(exercise, this.props.index)
    }

    this.updateSet = (index, event) =>{
      var name = event.target.name
      var value = event.target.value
      var exercise = deepClone(this.state.exercise)
      exercise.exercise_sets[index][name] = value
      this.props.toggleEdit();
      this.props.updateExercise(exercise, this.props.index)
    }

    this.remove = () =>{
      this.props.removeExercise(this.props.index)
    }
    
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.exercise) {
      var current = this.props.exercise;
      var next = nextProps.exercise;
      if (current.name !== next.name || current.exercise_sets.length !== next.exercise_sets.length ) {
        return this.setState({exercise: next});
      }
      if (current.exercise_sets.length === next.exercise_sets.length) {
        for (var i = 0; i < current.exercise_sets.length; i++) {
          let c = current.exercise_sets[i]
          let n = next.exercise_sets[i]
          if ( c.weight != n.weight || c.repetitions != n.repetitions) {
            return this.setState({exercise: next});
          }
        }
      }
    }
  }

  render(){
    var length = this.state.exercise.exercise_sets.length
    var sets = this.state.exercise.exercise_sets.map((set, index) => {
      return (
        <ExerciseSet set={set} index={index} updateSet={this.updateSet.bind(this, index)}/>
      )
    })

    return (
      <div className='exerciseForm' style={{border: '1px dotted blue', padding: '10px'}}>
        <Autocomplete
          getItemValue={(item) => item.label}
          items={this.state.items}
          renderItem={(item, isHighlighted) => 
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.label}
            </div>
          }
          shouldItemRender={this.shouldItemRender}
          value={this.state.exercise.name}
          onChange={this.updateName}
          onSelect={this.selectName}
        />
        <button onClick={this.remove}>Remove Exercise</button>
          <Table responsive>
            <thead>
              <tr>
                <th>Set</th>
                <th>Weight</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              
              {sets}
            </tbody>
          </Table>
        
        <button onClick={this.addSet}>Add Set</button>
      </div>
    )
  }
}

ExerciseForm.propTypes = {
  exercise: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  key: React.PropTypes.string.isRequired,
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: Exercise.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ExerciseForm);


 // <Col xs={4} md={2}>
 //          <ExerciseSet set={set} updateSet={this.updateSet} removeSet={this.removeSet} index={index} />
 //        </Col>
