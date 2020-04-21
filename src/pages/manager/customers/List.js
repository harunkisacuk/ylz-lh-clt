import React, { useState, useEffect } from 'react';
import Table from '../../../atoms/Table';
import '../../../atoms/Table.css';
import axios from 'axios';

const List = () => {
  const [customers, setCustomers] = useState([]);

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
      {customers.length > 0 ? (
        <Table data={customers} table={true} striped={true} />
      ) : (
        <div>deneme</div>
      )}
    </div>
  );
};

export default List;
