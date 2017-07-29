import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import TextInput from '../common/textInput';

import {DropdownButton, MenuItem, Grid, Row, Col, Table} from 'react-bootstrap'
import Autocomplete from 'react-autocomplete'

import {Exercise} from '../_store/index'
import ExerciseSet from './exerciseSet'

import {deepClone} from '../utilities/utilities'

class ExerciseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: this.props.exercise,
      items: [{ label: 'Bench Press' }, { label: 'Deadlift' }, { label: 'Squat' } ]
    }

    this.updateName = (field, index, event) => {
      this.props.updateField(event.target.value, field, index)
    }

    this.selectName = (field, index, value) => {
      this.props.updateField(value, field, index)
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
      this.props.toggleEdit();
      return this.setState(state);
    }

    this.removeSet = () => {
      var state = Object.assign({}, this.state)
      state.exercise.exercise_sets.pop()
      this.props.toggleEdit();
      return this.setState(state);
    }

    this.updateSet = (event) =>{
      var id = event.target.id.substr(event.target.id.length - 1);
      id = parseInt(id, 10) - 1
      var name = event.target.name
      var value = event.target.value
      var state = Object.assign({}, this.state)
      state.exercise.exercise_sets[id][name] = value
      this.props.toggleEdit();
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
    
    var length = this.state.exercise.exercise_sets.length
    var sets = this.state.exercise.exercise_sets.map((set, index) => {
      return (
        <tr>
          <td>Set {index + 1}</td>
          <td>{set.weight}</td>
          <td>{set.repetitions}</td>
        </tr>
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
          onChange={this.updateName.bind(this, 'name', this.props.index)}
          onSelect={this.selectName.bind(this, 'name', this.props.index)}
        />
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
