import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Input({
  id,
  name,
  type = 'text',
  required = false,
  placeholder,
  onChange = undefined,
  className,
  value,
  disabled = false,
  as,
  label,
  size,
  defaultValue,
  controlId
}) {
  return (
    <Form.Group as={as} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        disabled={disabled}
        size={size}
        value={value}
        defaultValue={defaultValue}
      />
    </Form.Group>
  );
}
