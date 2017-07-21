import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as actions from '../_store/actions'
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';
import Dropzone from 'react-dropzone'
import request from 'superagent';

import ReactUploadFile from 'react-upload-file';

import User from './userResource'

class ProfileImage extends Component {
  constructor(props){
    super(props);

    this.uploadFile = (event) =>{
      event.preventDefault();
      var file = event.target.files[0]
     
      var data = {user: {avatar: file, email: ''}}
      return this.props.actions.dispatchAction(User, 'uploadImage', data)
    }

    this.onDrop = (acceptedFiles) => {
      const req = request.post('/users').set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`)
        acceptedFiles.forEach(file => {
            req.attach('user[avatar]', file);
        });
        req.end(function(){
          alert('done!')
        });
    }
  }

  render(){

    return (
      <div id="profileImage">
       
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onDrop}>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
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

