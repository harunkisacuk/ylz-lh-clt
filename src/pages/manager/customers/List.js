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
      title: 'Created At',
      fieldName: 'createdAt'
    },
    {
      title: 'Created By',
      fieldName: 'createdBy'
    },
    {
      title: '#',
      icons: ['delete', 'edit']
    }
  ];

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
    <div>{<Table data={customers} titleData={title} table={true} striped={true} />}</div>
  );
};

export default List;
