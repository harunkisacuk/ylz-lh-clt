import React from 'react';
import { Form } from 'react-bootstrap';

const Dropdown = ({
  className,
  onChange = undefined,
  disabled = false,
  options = [],
  fieldName
}) => {
  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Control
        as="select"
        className={className}
        onChange={onChange}
        disabled={disabled}
      >
        <option>Please Select {fieldName}</option>
        {options.map((item) => (
          <option>{item}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default Dropdown;
