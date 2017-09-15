import React, {Component} from 'react';
import PropTypes from 'prop-types';

function InlineEdit({name, value placeholder, onChange}) {  
  
  const onChangeHandler = (event) => {
    onChange(event.target.value, name)
  }

  return (
    <div className="form-group">
      <div className="field">
        <input
          type='text'
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
      </div>
    </div>
  )
 
}

InlineEdit.propTypes = {  
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default InlineEdit;