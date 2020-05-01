import React from 'react';
import Icon from './Icon';
import Dropdown from './Dropdown';
// import { Button } from 'react-bootstrap';
import Button from './Button';

const RenderAddress = ({ addresses = [], onClick = undefined }) => {
  return (
    <div>
      <Button
        variant="link"
        size="sm"
        onClick={onClick}
        text={addresses[0].postCode}
      ></Button>

      {
        // {addresses.map((address) => (
        //   <span>
        //     {address.city + ' ' + address.postCode}
        //     <br />
        //   </span>
        // ))}
      }
      {
        //   <Dropdown
        //   options={addresses.map(
        //     (address) =>
        //       address.firstLine +
        //       ' ' +
        //       address.secondLine +
        //       ' ' +
        //       address.thirdLine +
        //       ' ' +
        //       address.town +
        //       ' ' +
        //       address.city +
        //       ' ' +
        //       address.postCode
        //   )}
        // />
      }
    </div>
  );
};

export default RenderAddress;
