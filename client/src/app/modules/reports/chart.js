import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class Charty extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
        <XAxis dataKey={'x'} name='stature' unit='cm'/>
        <YAxis dataKey={'y'} name='weight' unit='kg'/>
        <ZAxis dataKey={'z'} range={[60, 400]} name='score' unit='km'/>
        <CartesianGrid />
        <Tooltip cursor={{strokeDasharray: '3 3'}}/>
        <Legend/>
        <Scatter name='A school' data={this.props.data1} fill='#8884d8' />
      </ScatterChart>
      </div>
    );
  }

}


export default Charty;



