import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col, Button, Card } from 'react-bootstrap';
import Input from '../../../atoms/Input';
import axios from 'axios';
import './Edit.css';

const View = (props) => {
  const id = props.match.params.id;
  const [customer, setCustomer] = useState([]);
  const [data, setData] = useState();
  const [startDate, setStartDate] = useState(new Date());
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
      setData(cList.data);
    })();
  }, []);
  console.log(customer);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    customer.length !== 0 && (
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
                <Input
                  label="First Name"
                  controlId="formGridFirstName"
                  size="sm"
                  as={Col}
                  type="text"
                  value={data?.firstName}
                  onChange={handleOnChange}
                  name="firstName"
                />
                <Input
                  label="Last Name"
                  controlId="formGridLastName"
                  size="sm"
                  as={Col}
                  type="text"
                  value={data?.lastName}
                  onChange={handleOnChange}
                  name="lastName"
                ></Input>
                <Input
                  label="Email"
                  controlId="formGridEmail"
                  size="sm"
                  as={Col}
                  type="email"
                  value={data?.email}
                  onChange={handleOnChange}
                  name="email"
                ></Input>
              </Form.Row>
              <hr />
              <Form.Label>
                <strong>Addresses</strong>
              </Form.Label>
              {customer.address?.length > 0 &&
                customer.address?.map((address, i) => (
                  <div>
                    <Form.Row>
                      <Input
                        label="First Line"
                        controlId="formGridAddres"
                        size="sm"
                        as={Col}
                        type="text"
                        value={address.firstLine}
                        onChange={handleOnChange}
                        name='address.firstLine'
                      ></Input>
                      <Input
                        label="Second Line"
                        controlId="formGridAddres"
                        size="sm"
                        as={Col}
                        type="text"
                        defaultValue={address.secondLine}
                      ></Input>
                      <Input
                        label="Third Line"
                        controlId="formGridAddres"
                        size="sm"
                        as={Col}
                        type="text"
                        defaultValue={address.thirdLine}
                      ></Input>
                      <Input
                        label="Town"
                        controlId="formGridAddres"
                        size="sm"
                        as={Col}
                        type="text"
                        defaultValue={address.town}
                      ></Input>
                      <Input
                        label="City"
                        controlId="formGridAddres"
                        size="sm"
                        as={Col}
                        type="text"
                        defaultValue={address.city}
                      ></Input>
                      <Input
                        label="Post Code"
                        controlId="formGridAddres"
                        size="sm"
                        as={Col}
                        type="text"
                        defaultValue={address.postCode}
                      ></Input>
                    </Form.Row>
                    <hr />
                  </div>
                ))}
              <Form.Row id="formGridCheckbox">
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck"
                    name="example1"
                    defaultChecked={customer.isIndividual}
                  />
                  <label className="custom-control-label" htmlFor="customCheck">
                    Is Individual?
                  </label>
                </div>
                <div className="custom-control custom-checkbox ml-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    name="example1"
                    defaultChecked={customer.isDeleted}
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Is Deleted?
                  </label>
                </div>
              </Form.Row>
              <Form.Row>
                <Input
                  label="Post Code"
                  controlId="formGridAddres"
                  size="sm"
                  as={Col}
                  type="text"
                  defaultValue={customer.createdBy}
                ></Input>

                <Form.Group as={Col} controlId="formGridCreatedAt">
                  <Form.Label>Created At</Form.Label>
                  <Form.Control value={customer.createdAt} size="sm" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDeletedAt">
                  <Form.Label>Deleted At</Form.Label>
                  <Form.Control value={customer.deletedAt} size="sm" />
                </Form.Group>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  );
};

export default View;
