import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

export default function Icon({ icon, onClick, name, id }) {
  const handleOnClick = (e, icon) => {
    onClick(
      e,
      e.target.parentNode.hasAttribute('myType')
        ? e.target.parentNode.getAttribute('id')
        : e.target.getAttribute('id')
    );
  };
  return (
    <FontAwesomeIcon
      icon={icons[icon]}
      style={{ cursor: 'pointer' }}
      onClick={handleOnClick}
      id={id}
      myType="my-type"
      name={name}
    />
  );
}
