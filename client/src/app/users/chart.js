import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class Charty extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      <LineChart width={600} height={300} data={this.props.data}margin={{top: 20, right: 0, left: 0, bottom: 20}}>
       <XAxis dataKey="date"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="body_fat" stroke="#1114d8" activeDot={{r: 8}}/>
      </LineChart>
      </div>
    );
  }

}


export default Charty;



