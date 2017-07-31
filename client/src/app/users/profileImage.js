import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';
import Dropzone from 'react-dropzone'
import request from 'superagent';
import User from './userResource'
import Store from '../_store/store'

class ProfileImage extends Component {
  constructor(props){
    super(props);

    this.uploadFile = (event) =>{
      event.preventDefault();
      var file = event.target.files[0]
      this.props.actions.dispatchAction('uploadImage', file)
    }
  }

  render(){

    return (
      <div id="profileImage">
        <input type='file'  onChange={this.uploadFile} />
      </div>
    )
  }

}

ProfileImage.propTypes = {

}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: User.dispatchAction}, dispatch)
  }
}



export default connect(null, mapDispatchToProps)(ProfileImage);



