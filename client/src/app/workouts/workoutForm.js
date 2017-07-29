import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InlineEdit from 'react-edit-inline';
import moment from 'moment';
import CalendarModal from '../common/calendarModal'
import TimeInput from '../common/timeInput'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class WorkoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: this.props.workout
    }

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

  componentWillReceiveProps(nextProps) {
    if (this.props.workout) {
      for (let key in this.props.workout) {
        if ( this.props.workout[key] != nextProps.workout[key] ) {
          return this.setState({workout: nextProps.workout});
        }
      }
    }
  }

  render(){

    const date = moment(this.state.workout.date).format('l')
    const start_time = moment(this.state.workout.start_time).format('LT')
    const end_time = moment(this.state.workout.end_time).format('LT')

    return (
      <div>
        <label>Name</label>
          <InlineEdit
            className='default'
            activeClassName="editing"
            text={this.state.workout.name}
            paramName="name"
            change={this.props.updateField}
            style={this.style}
          />
        <label>Start Time</label>
          <TimeInput updateField={this.props.updateField} time={start_time} field={'start_time'} />
        <label>End Time</label>
          <TimeInput updateField={this.props.updateField}  time={end_time} field={'end_time'}/>
        <label>Date</label>
          <CalendarModal updateField={this.props.updateField} date={date} />
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