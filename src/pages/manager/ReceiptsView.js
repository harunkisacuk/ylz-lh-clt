import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import './customers/View.css';

const ReceiptsView = props => {
  const id = props.match.params.id;
  const [receipt, setReceipt] = useState([]);
  const [customers, setCustomers] = useState([]);
  const history = useHistory();
  const handleGoHome = () => {
    history.push({ pathname: `/manager/receipts/` });
  };

  useEffect(() => {
    (async () => {
      let url = `http://localhost:3009/receipts/${id}`;
      const receiptsData = await axios.get(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('idToken.idtoken')
        }
      });
      setReceipt(receiptsData.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let urlCustomer = process.env.REACT_APP_CUSTOMER_API;
      const cList = await axios.get(urlCustomer, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('idToken.idtoken')
        }
      });

      setCustomers(cList.data);
    })();
  }, []);
  const selectedCustomer =
    customers.length !== 0 &&
    customers.find(customer => customer.id === receipt.customerId);

  return (
    <div>
      <Card className="card">
        <Card.Body>
          <Card.Title>
            Receipt : <em>{receipt.id}</em>
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
                  <Form.Label>
                    {selectedCustomer.firstName + ' ' + selectedCustomer.lastName}
                  </Form.Label>
                </div>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <strong>Receieved By</strong>
                </Form.Label>
                <div>
                  <Form.Label>{receipt.receivedBy}</Form.Label>
                </div>
              </Form.Group>
            </Form.Row>
            <hr />
            <Form.Label>
              <strong>Details</strong>
            </Form.Label>
            <div>
              <Form.Label>{receipt.details}</Form.Label>
            </div>
            <hr />
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCreatedBy">
                <Form.Label>
                  <strong>Created By</strong>
                </Form.Label>
                <div>
                  <Form.Label>{receipt.createdBy}</Form.Label>
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCreatedAt">
                <Form.Label>
                  <strong>Created At</strong>
                </Form.Label>
                <div>
                  <Form.Label>{receipt.date}</Form.Label>
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAmount">
                <Form.Label>
                  <strong>Amount</strong>
                </Form.Label>
                <div>
                  <Form.Label>£ {receipt.amount}</Form.Label>
                </div>
              </Form.Group>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReceiptsView;
