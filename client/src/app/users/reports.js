import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Charty from './chart'
import request from 'superagent';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';
import User from './userResource'

const data01 = [{x: 100, y: 200, z: 200}, {x: 101, y: 100, z: 260},
                  {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
                  {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]

class Reports extends Component {
  constructor(props){
    super(props);
    this.data = [
      {x: 100 , y: 135},
      {x: 100 , y: 185},
      {x: 100 , y: 225},
      {x: 100 , y: 225},
      {x: 100 , y: 225},
      {x: 120 , y: 135},
      {x: 120 , y: 185},
      {x: 120 , y: 235},
      {x: 120 , y: 235},
      {x: 120 , y: 235},
      {x: 140 , y: 135},
      {x: 140 , y: 185},
      {x: 140 , y: 245},
      {x: 140 , y: 245},
      {x: 140 , y: 245},
    ]

    this.generateReport = () => {
      var that = this;
      const req = request.post('/reports').set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`)
        req.end(function(error, response){
          console.log(response.body)
        });
    }
  }



  render(){
    return (
      <div id="reports">
        I'm the reports page.
        <Charty data1={data01} />
        <button onClick={this.generateReport}>Click To Generate</button>
      </div>
    )
  }

}

Reports.propTypes = {

}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({dispatchAction: User.dispatchAction}, dispatch)
  }
}



export default connect(null, mapDispatchToProps)(Reports);