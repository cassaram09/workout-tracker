import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InlineEdit from 'react-edit-inline';

class WorkoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: this.props.workout
    }

    this.updateField = (data) => {
      var state = Object.assign({}, this.state)
      var field = Object.keys(data)[0]
      var value = data[field]
      state.workout[field] = value
      return this.setState(state);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workout) {
      if (this.props.workout.name != nextProps.workout.name) {
        return this.setState({workout: nextProps.workout});
      }
    }
  }

  render(){
    const style = {
      width: '100%',
      display: 'block',
      margin: 0,
      padding: 0,
      fontSize: 15,
      outline: 0,
      border: '1px solid grey'
    }
    return (
      <div>
        <InlineEdit
          className='default'
          activeClassName="editing"
          text={this.state.workout.name}
          paramName="name"
          change={this.props.updateField}
          style={style}
        />

        <InlineEdit
          className='default'
          activeClassName="editing"
          text={this.state.workout.data || 'No date entered.'}
          paramName="end_time"
          change={this.props.updateField}
          style={style}
        />

         <InlineEdit
          className='default'
          activeClassName="editing"
          text={this.state.workout.start_time || 'No time entered.'}
          paramName="start_time"
          change={this.props.updateField}
          style={style}
        />

        <InlineEdit
          className='default'
          activeClassName="editing"
          text={this.state.workout.end_time || 'No time entered.'}
          paramName="end_time"
          change={this.props.updateField}
          style={style}
        />
      </div>
    )
  }
}

WorkoutForm.propTypes = {
  workout: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

export default WorkoutForm;