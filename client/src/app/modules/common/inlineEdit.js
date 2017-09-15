import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InlineEdit extends Component {  
  constructor(){
    super()

    this.onChange = (event) => {
      var string = event.target.value
      this.props.onChange(string, this.props.name)
    }
  }

  render(){
    return (
      <div className="form-group">
        <div className="field">
          <input
            type='text'
            name={this.props.name}
            className="form-control"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.onChange}/>
        </div>
      </div>
    )

  }
 
}

export default InlineEdit; 

 