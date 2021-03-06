import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InlineEdit from 'react-edit-inline';
import DatePicker from 'react-datepicker'
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';

class WorkoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: this.props.workout
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

    var date = moment(this.state.workout.date)
    var start_time = moment(this.state.workout.start_time)
    var end_time = moment(this.state.workout.end_time)
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

        <p>
          <TimePicker onChange={this.props.changeStartTime} value={start_time} showSecond={false} />
        </p>
        <p>
          <TimePicker onChange={this.props.changeEndTime} value={end_time} showSecond={false} />
        </p>
        <p>
          <DatePicker placeholderText="Click to select a date" onChange={this.props.changeDate} selected={date} />
        </p>

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