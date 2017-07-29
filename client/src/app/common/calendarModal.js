import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet
import moment from 'moment';

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

    this.selectDate = (date) => {
      var converted = moment(date).format('l')
      this.props.updateField(converted, 'date')
      this.close();
    }

  }

  render() {
    var today = new Date();
    var lastMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);
    var date = this.props.date || today

    return (
      <div>
        <input value={this.props.date} onClick={this.open}/>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            <Button onClick={this.close}>Close</Button>
            <InfiniteCalendar
              selected={date}
              disabledDays={[0,6]}
              minDate={lastMonth}
              onSelect={this.selectDate}
            />
          </Modal.Body>
        </Modal>
      </div>
    )   
  }

}

export default CalendarModal;
