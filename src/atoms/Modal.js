import React from 'react';
import { Modal as ModalM, Button, Table } from 'react-bootstrap';

const Modal = (props) => {
  return (
    <ModalM {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <ModalM.Header closeButton>
        <ModalM.Title id="contained-modal-title-vcenter">
          {props.name + "'s address(es)"}
        </ModalM.Title>
      </ModalM.Header>
      <ModalM.Body>
        <Table bordered hover>
          <tbody>
            {props.addresses.map((address, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {address.firstLine +
                    ' ' +
                    address.secondLine +
                    ' ' +
                    address.thirdLine +
                    ' ' +
                    address.town +
                    ' ' +
                    address.city +
                    ' ' +
                    address.postCode}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalM.Body>
      <ModalM.Footer>
        <Button variant="secondary" size="sm" onClick={props.onHide}>
          Close
        </Button>
      </ModalM.Footer>
    </ModalM>
  );
};

export default Modal;
