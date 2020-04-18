import React from 'react';
import Form from 'react-bootstrap/Form'

export default function Input({
    id,
    name,
    type = 'text',
    required = false,
    placeholder,
    onChange = undefined,
    className,
    value,
    disabled = false

}) {
    return (
        <div>

                <Form.Group >
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control
                        id={id}
                        name={name}
                        type={type}
                        required={required}
                        placeholder={placeholder}
                        onChange={onChange}
                        className={className}
                        value={value}
                        disabled={disabled} />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

        </div>
    );
}

