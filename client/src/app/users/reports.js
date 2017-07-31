import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Charty from './chart'

class Reports extends Component {
  constructor(props){
    super(props);
    this.data = [
      {date: '8/9/17', weight: 170, body_fat: 12},
      {date: '8/10/17', weight: 175,  body_fat: 13},
      {date: '8/11/17', weight: 180,  body_fat: 15}
    ];
  }

  render(){
    return (
      <div id="reports">
        I'm the reports page.
        <Charty data={this.data}/>
      </div>
    )
  }

}

Reports.propTypes = {

}

export default Reports;