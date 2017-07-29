import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap'
import InfiniteCalendar from 'react-infinite-calendar';

class CalendarModal extends Component {
  constructor(){
    super()

    this.state = {
      showModal: false
    }

    this.close = () => {
      this.setState({ showModal: false });
    }

    this.open = () => {
      this.setState({ showModal: true });
    }

    this.selectDate = (event) => {
      this.props.selectDate(event)
      this.close();
    }

  }

  render() {
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    return (
      <div>
        <Button bsStyle="primary" bsSize="medium" onClick={this.open}>Select Date</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            <Button onClick={this.close}>Close</Button>
            <InfiniteCalendar
              selected={today}
              disabledDays={[0,6]}
              minDate={lastWeek}
              onSelect={this.selectDate}
            />
          </Modal.Body>
        </Modal>
      </div>
    )
    
  }

}

export default CalendarModal;
