import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '../../atoms/Table';
import '../../atoms/Table.css';
import axios from 'axios';

const ReceiptList = () => {
  const [receiptList, setReceiptList] = useState([]);
  const [customers, setCustomers] = useState([]);
  const title = [
    {
      title: '# ',
      fieldName: 'id'
    },
    { title: 'Customer', fieldName: 'customerName' },
    {
      title: 'Date',
      fieldName: 'date'
    },
    {
      title: 'Created By',
      fieldName: 'createdBy'
    },
    {
      title: 'Amount (£)',
      fieldName: 'amount'
    },
    {
      title: '',
      icons: ['Eye']
    }
  ];
  const history = useHistory();
  const handleClick = (e, icon) => {
    const id = e.target.parentNode.getAttribute('name');
    history.push({ pathname: `/manager/receipts/${id}` });
  };

  useEffect(() => {
    (async () => {
      let urlReceipts = process.env.REACT_APP_RECEIPT_API;
      const receiptsData = await axios.get(urlReceipts, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('idToken.idtoken')
        }
      });
      setReceiptList(receiptsData.data);
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

  const newReceiptList = receiptList.map(receipt => {
    if (customers.length !== 0) {
      const selectedCustomer = customers.find(
        customer => customer.id === receipt.customerId
      );
      receipt.customerName = selectedCustomer.firstName + ' ' + selectedCustomer.lastName;
    }
    return receipt;
  });

  return (
    <>
      {
        <Table
          data={newReceiptList}
          titleData={title}
          striped={true}
          iconClick={e => handleClick(e)}
        />
      }
    </>
  );
};

export default ReceiptList;
