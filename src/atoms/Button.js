import React from 'react';
import { Button as ButtonB } from 'react-bootstrap';
import Icon from './Icon';

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
    <ButtonB id={id} disabled={disabled} onClick={onClick} type={type} variant={variant}>
      {icon && <Icon icon={icon} />}
      {text}
    </ButtonB>
  );
}
