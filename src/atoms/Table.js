import React from 'react';
import { decamelize } from '../helper/functions';
import { Table as TableB } from 'react-bootstrap';
import RenderBoolean from './RenderBoolean';
import './Table.css';

const Table = ({
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
          {Object.keys(data[0]).map((item, k) => (
            <th className="table-head" scope="col" key={k}>
              {decamelize(item, ' ')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((c, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            {Object.values(c).map(
              (value, i) =>
                i !== 0 && (
                  <td key={i}>
                    {typeof value === 'boolean' ? (
                      <RenderBoolean value={value} />
                    ) : (
                      value || ' '
                    )}
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
