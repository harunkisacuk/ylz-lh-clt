import React from 'react';
import { decamelize } from '../helper/functions';
import { Table } from 'react-bootstrap';

export const Tables = ({ arr = [], className }) => {
  return (
    <Table className={className}>
      <thead>
        <tr>
          {Object.keys(arr[0]).map((item, k) => (
            <th scope="col" key={k}>
              {decamelize(item, ' ')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {arr.map((c, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            {Object.values(c).map((item, i) => i !== 0 && <td key={i}>{item || ' '}</td>)}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
