import React, { useState, useEffect } from 'react';
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
    { title: 'Customer', fieldName: 'firstName' },
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
      icons: ['Edit', 'TrashAlt']
    }
  ];

  useEffect(() => {
    (async () => {
      // let urlCustomer = 'http://localhost:3009/customers';
      let urlReceipts = 'http://localhost:3009/receipts';
      const receiptsData = await axios.get(urlReceipts, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('idToken.idtoken')
        }
      });
      // const cList = await axios.get(urlCustomer, {
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //     Authorization: 'Bearer ' + localStorage.getItem('idToken.idtoken')
      //   }
      // });

      setReceiptList(receiptsData.data);
      // setCustomers(cList.data);
    })();
  }, []);

  console.log('receiptList', receiptList);
  console.log('customers', customers);
  const receiptWithCustomer = [];

  for (var id = 1; id < receiptList.length; id++) {
    const receiptSelectedById = receiptList.find(receipt => {
      return receipt.id === id;
    });
    console.log('eceiptSelectedById', receiptSelectedById);
    const customerSelectedById = customers.find(customer => {
      return customer.id === receiptSelectedById.customerId;
    });
    const concatReceiptAndCustomer = customerSelectedById.concat(receiptSelectedById);
    if (customerSelectedById) {
      receiptWithCustomer.push(concatReceiptAndCustomer);
    }
  }
  console.log('receiptWithCustomer', receiptWithCustomer);

  return <>{<Table data={receiptList} titleData={title} striped={true} />}</>;
};

export default ReceiptList;
