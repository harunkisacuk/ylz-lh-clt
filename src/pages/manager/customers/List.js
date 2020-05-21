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
      icons: ['Edit', 'TrashAlt']
    }
  ];

  useEffect(() => {
    (async () => {
      let url = process.env.REACT_APP_CUSTOMER_API;
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

  return <div>{<Table data={customers} titleData={title} striped={true} />}</div>;
};

export default List;
