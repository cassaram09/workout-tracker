import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import {Overlay, Tooltip} from 'react-bootstrap'

class TimeInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      time: this.props.value,
      show: false
    }

    this.pattern = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]\s?[aApP][mM]$/i;

    this.validateTime = (event) => {
      var string = event.target.value.trim();
      if ( string.match(this.pattern) ) {
        this.setState({time: string})
        return this.props.updateField(string, this.props.name);
      }
      this.showPopUp();
      return this.setState({time: ''})
    }

    this.handleChange = (event) => {
      var string = event.target.value;
      if (string.length > 8){
        return
      }
      this.setState({time: string})
    }

    this.showPopUp = () => {
      this.setState({show: true})
      setTimeout(() => ( this.setState({show: false}) ), 3000);
    }

  }

  render() {

    const style = {
      position: 'absolute',
      backgroundColor: '#EEE',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
      border: '1px solid #CCC',
      borderRadius: 3,
      marginLeft: 5,
      marginTop: 0,
      padding: 10,
    }

    return (
      <div className='timeInput'>
        <input  ref='timeInput' type='text' placeholder='HH:MM PM' value={this.state.time} maxlength="10" onChange={this.handleChange} onBlur={this.validateTime} />
        <Overlay
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          placement="right"
          target={() => ReactDOM.findDOMNode(this.refs.timeInput)}
        >
          <div style={style}>Please enter a correct time.</div>
        </Overlay>
      </div>
    )
    
  }

}

export default TimeInput;
