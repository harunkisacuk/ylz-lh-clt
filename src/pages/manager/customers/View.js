import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import './View.css';

const View = (props) => {
  const id = props.match.params.id;
  const [customer, setCustomer] = useState([]);
  const history = useHistory();
  const handleGoHome = () => {
    history.push({ pathname: `/manager/customers/` });
  };

  useEffect(() => {
    (async () => {
      let url = `http://localhost:3009/customers/${id}`;
      const cList = await axios.get(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('idToken.idtoken')
        }
      });
      setCustomer(cList.data);
    })();
  }, []);
  return (
    <div>
      <Card className="card">
        <Card.Body>
          <Card.Title>
            Details of <em>"{customer.firstName + ' ' + customer.lastName}"</em>
            <Button
              className="back-button"
              onClick={handleGoHome}
              variant="primary"
              type="submit"
              size="sm"
            >
              Go Back
            </Button>
            <Button className="edit-button" variant="primary" type="submit" size="sm">
              Edit
            </Button>
          </Card.Title>
          <hr />
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>
                  <strong>Customer Name</strong>
                </Form.Label>
                <div>
                  <Form.Label>{customer.firstName + ' ' + customer.lastName}</Form.Label>
                </div>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <strong>Email</strong>
                </Form.Label>
                <div>
                  <Form.Label>{customer.email}</Form.Label>
                </div>
              </Form.Group>
            </Form.Row>
            <hr />
            <Form.Label>
              <strong>Addresses</strong>
            </Form.Label>
            <ol>
              {customer.address?.length > 0 &&
                customer.address?.map((address, i) => (
                  <Form.Group controlId="formGridAddress">
                    <Form.Label>
                      <li key={i}>
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
                      </li>
                    </Form.Label>
                  </Form.Group>
                ))}
            </ol>
            <hr />
            <Form.Row id="formGridCheckbox">
              <div className="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck"
                  name="example1"
                  checked={customer.isIndividual}
                />
                <label className="custom-control-label" htmlFor="customCheck">
                  Is Individual?
                </label>
              </div>
              <div className="custom-control custom-checkbox ml-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck"
                  name="example1"
                  checked={customer.isDeleted}
                />
                <label className="custom-control-label" htmlFor="customCheck">
                  Is Deleted?
                </label>
              </div>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCreatedBy">
                <Form.Label>
                  <strong>Created By</strong>
                </Form.Label>
                <div>
                  <Form.Label>{customer.createdBy}</Form.Label>
                </div>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCreatedAt">
                <Form.Label>
                  <strong>Created At</strong>
                </Form.Label>
                <div>
                  <Form.Label>{customer.createdAt}</Form.Label>
                </div>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDeletedAt">
                <Form.Label>
                  <strong>Deleted At</strong>
                </Form.Label>
                <div>
                  <Form.Label>{customer.deletedAt}</Form.Label>
                </div>
              </Form.Group>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default View;
