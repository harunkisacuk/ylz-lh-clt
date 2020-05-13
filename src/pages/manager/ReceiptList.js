import React, { useState, useEffect } from 'react';
import Table from '../../atoms/Table';
import '../../atoms/Table.css';
import axios from 'axios';

const ReceiptList = () => {
  const [receiptList, setReceiptList] = useState([]);
  const title = [
    {
      title: 'ID',
      fieldName: 'id'
    },
    {
      title: 'Created By',
      fieldName: 'createdBy'
    },
    {
      title: 'Date',
      fieldName: 'date'
    },
    {
      title: 'Amount (£)',
      fieldName: 'amount'
    },
    {
      title: 'Status',
      icons: ['Edit', 'TrashAlt']
    }
  ];

  useEffect(() => {
    (async () => {
      let url = 'http://localhost:3009/receipts';
      const receiptsData = await axios.get(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('idToken.idtoken')
        }
      });
      setReceiptList(receiptsData.data);
    })();
  }, []);

  console.log('receiptList', receiptList);

  return <>{<Table data={receiptList} titleData={title} striped={true} />}</>;
};

export default ReceiptList;
