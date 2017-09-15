import React, {Component} from 'react';
import {Grid, Row, Col } from 'react-bootstrap'
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 

import User from '../modules/users/userResource'
import UserForm from '../modules/users/userForm'

class Profile extends Component {
  constructor(props){
    super(props) 

    this.state = {
      user: this.props.user,
      show: false
    }

    this.update = (user) => {
      var state = deepClone(this.state)
      state.user = user;
      return this.setState(state)
    }

    this.toggleAlert = () =>{
      return this.setState({show: true})
    }

    this.save = () => {
      var state = deepClone(this.state)
      delete state.user.avatar;
      this.props.actions.dispatchAction('update', state).then((response) =>{
        this.toggleAlert()
      })
    }

  }

  componentWillReceiveProps(nextProps) {
    return this.setState({user: nextProps.user});
  }

  render(){
    return (
      <div class='profile'>
        <h2>Profile</h2>
        <UserForm user={this.state.user} update={this.update} save={this.save} toggleAlert={this.toggleAlert} />
        <SweetAlert show={this.state.show} title="Profile Updated!" onConfirm={() => {return this.setState({show: false}) } } />
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => { 
  return {user: state.user};
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({dispatchAction: User.dispatchAction}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
