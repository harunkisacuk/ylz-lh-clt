import React from 'react';
import Icon from './Icon';
import * as icons from '@fortawesome/free-solid-svg-icons';

export default function RenderBoolean({ value }) {
  return value ? <Icon icon="faCheck" /> : null;
}
