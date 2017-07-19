import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/textInput';

class WorkoutForm extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <form>
          <TextInput
            name="name"
            label="name"
            value={this.props.workout.name}
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

WorkoutForm.propTypes = {
  workout: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

export default WorkoutForm;