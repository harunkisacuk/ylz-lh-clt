import React from 'react';
import { decamelize } from '../helper/functions';
import { Table as TableB } from 'react-bootstrap';
import RenderBoolean from './RenderBoolean';
import RenderAddress from './RenderAddress';
import Modal from './Modal';
import Icon from './Icon';
import './Table.css';

const Table = ({
  titleData = [],
  data = [],
  striped = false,
  bordered = false,
  hover = false,
  responsive = false,
  table = 'table',
  size
}) => {
  return (
    <TableB
      striped={striped}
      bordered={bordered}
      hover={hover}
      size={size}
      responsive={responsive}
      table={table}
    >
      <thead>
        <tr>
          {titleData.map((item, k) => (
            <th className="table-head" scope="col" key={k}>
              {item.title}
            </th>
          ))}
          <th>#</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {data.filter(
            (item) => item === titleData.map((title) => title.fieldName)(<td>{item}</td>)
          )}
        </tr>
      </tbody>
    </TableB>
  );
};

export default Table;
