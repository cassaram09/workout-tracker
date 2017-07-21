import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HTTP from '../api/http'

class ProfileImage extends Component {
  constructor(props){
    super(props);

    this.uploadFile = (event) =>{
      event.preventDefault();
      var file = event.target.files[0];
      var headers = new Headers({
        'Content-Type': 'application/json',
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
      })
      return HTTP.$post('/users', {user: {avatar: file}}, headers)
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

export default ProfileImage;