import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/textInput'


class UserForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: this.props.user
    }

    this.updateField = (event) => {
      var state = Object.assign({}, this.state)
      var field = event.target.name
      var value = event.target.value
      state.user[field] = value
      return this.setState(state);
    }
    
  }

  render(){
    var {name, email, height, weight, age, gender } = this.state.user;

    return (
      <div id="userForm">
        <TextInput
          name="name"
          label="Name"
          value={name}
          onChange={this.updateField} />
        <TextInput
          name="email"
          label="Email"
          value={email}
          onChange={this.updateField} />
        <TextInput
          name="height"
          label="Height"
          value={height}
          onChange={this.updateField} />
        <TextInput
          name="weight"
          label="weight"
          value={weight}
          onChange={this.updateField} />
        <TextInput
          name="age"
          label="age"
          value={age}
          onChange={this.updateField} />
         <p>
          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.props.updateUser}
          />
        </p>
      </div>
    )
  }

}

UserForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

export default UserForm;