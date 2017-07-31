import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/textInput'
import InlineEdit from 'react-edit-inline';
import User from './userResource'
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';

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

    this.updateInlineField = (data) => {
      var state = Object.assign({}, this.state)
      var field = Object.keys(data)[0]
      var value = data[field]
      state.user[field] = value
      return this.setState(state);
    }

    this.uploadFile = (event) =>{
      event.preventDefault();
      var file = event.target.files[0]
      this.props.actions.dispatchAction('uploadImage', file)
    }
    
  }

  render(){
    var {name, email, height, weight, age, gender } = this.state.user;

    return (
      <div id="userForm">
        <InlineEdit
          activeClassName="editing"
          text={name}
          paramName="name"
          change={this.updateInlineField}
          style={{
            width: '100%',
            display: 'inline-block',
            margin: 0,
            padding: 0,
            fontSize: 15,
            outline: 0,
            border: '1px solid grey'
          }}
        />
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

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: User.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(UserForm);