import React, { useState, useEffect } from 'react';
import Table from '../../../atoms/Table';
import '../../../atoms/Table.css';
import axios from 'axios';

const List = () => {
  const [customers, setCustomers] = useState([]);
  const title = [
    {
      title: 'ID',
      fieldName: 'id'
    },
    {
      title: 'First Name',
      fieldName: 'firstName'
    },
    {
      title: 'Last Name',
      fieldName: 'lastName'
    },
    {
      title: 'Email',
      fieldName: 'email'
    },
    {
      title: 'Created By',
      fieldName: 'createdBy'
    }
  ];

  // setTitle([
  //   {
  //     title: 'ID',
  //     fieldName: 'id'
  //   },
  //   {
  //     title: 'First Name',
  //     fieldName: 'firstName'
  //   },
  //   {
  //     title: 'Last Name',
  //     fieldName: 'lastName'
  //   },
  //   {
  //     title: 'Phone',
  //     fieldName: 'phone'
  //   },
  //   {
  //     title: 'Address',
  //     fieldName: 'address'
  //   }
  // ]);

  useEffect(() => {
    (async () => {
      let url = 'http://localhost:3009/customers';
      const cList = await axios.get(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('idToken.idtoken')
        }
      });
      setCustomers(cList.data);
    })();
  }, []);

  return (
    <div>
      {console.log(customers)}
      {<Table titleData={title} table={true} striped={true} />}
    </div>
  );
};

export default List;
