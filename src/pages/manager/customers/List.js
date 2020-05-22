import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '../../../atoms/Table';
import '../../../atoms/Table.css';
import axios from 'axios';

const List = (props) => {
  const [customers, setCustomers] = useState([]);
  const title = [
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
      title: '',
      icons: ['Receipt', 'Eye', 'Edit', 'TrashAlt']
    }
  ];

  const history = useHistory();
  const handleClick = (e, icon) => {
    const id = e.target.parentNode.getAttribute('name');
    if (icon === 'Eye') {
      history.push({ pathname: `/manager/customers/${id}` });
    }
  };

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

  return (
    <div>
      {
        <Table
          data={customers}
          titleData={title}
          striped={true}
          iconClick={(e, icon) => handleClick(e, icon)}
        />
      }
    </div>
  );
};

export default List;
