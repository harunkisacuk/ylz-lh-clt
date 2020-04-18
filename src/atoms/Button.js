import React from 'react';
import { Button as ButtonB } from 'react-bootstrap';


export default function Button({
    id,
    text,
    disabled = false,
    onClick = undefined,
    type = 'button',
    className,
    variant,
    color,
    icon
}) {
    return (

        <ButtonB
            id={id}
            disabled={disabled}
            onClick={onClick}
            type={type}
            // className={`${className || ''} ${variant || ''} ${color || ''}`}
            variant={variant}
        >
            {icon && <i className={`icon-${icon}`} />}
            {text}
        </ButtonB>
    );
}

