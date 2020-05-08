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
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr className="table-tr" key={'row' + i}>
            {titleData.map((title, k) =>
              item[title.fieldName] ? (
                <td key={'column' + k}>{item[title.fieldName]}</td>
              ) : (
                <td>
                  <Icon icon="trash" />
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </TableB>
  );
};

export default Table;
