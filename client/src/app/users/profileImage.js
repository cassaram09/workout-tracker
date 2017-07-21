import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as actions from '../_store/actions'
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';

import ReactUploadFile from 'react-upload-file';

import User from './userResource'

class ProfileImage extends Component {
  constructor(props){
    super(props);

    this.uploadFile = (event) =>{
      event.preventDefault();
      var file = event.target.files[0]
     
      var data = {user: {avatar: file, email: ''}}
      debugger
      return this.props.actions.dispatchAction(User, 'uploadImage', data)
    }
  }

  render(){

    return (
      <div id="profileImage">
        <input type='file' className='btn'  onChange={this.uploadFile}/>
      </div>
    )
  }

}

ProfileImage.propTypes = {

}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}



export default connect(null, mapDispatchToProps)(ProfileImage);