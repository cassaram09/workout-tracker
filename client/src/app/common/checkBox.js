import React, {PropTypes} from 'react';

// component that wraps checkboxes with additional functionality
class CheckBox extends React.Component {  
  render() {
    return (
     <div className="field">
        <div>
          <label>{this.props.item.description}</label>
          <input 
            type="checkbox" 
            name={this.props.item.description} 
            value={this.props.item.id} 
            checked={this.props.item.checked} 
            onChange={this.props.handleChange}/>
        </div>
      </div>
    );
  }
}

CheckBox.propTypes = {  
  item: PropTypes.object.isRequired, 
  handleChange: PropTypes.func.isRequired
};

export default CheckBox;  