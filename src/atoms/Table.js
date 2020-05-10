import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table as TableB } from 'react-bootstrap';
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
  const history = useHistory();
  const handleView = (e) => {
    const id = e.target.parentNode.getAttribute('name');
    history.push({ pathname: `/manager/customers/${id}` });
  };
  return (
    <TableB
      striped={striped}
      bordered={bordered}
      hover={hover}
      size={size}
      responsive={responsive}
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
          <tr
            className="table-tr"
            key={'row' + i}
            name={item.id}
            onClick={(e) => handleView(e)}
          >
            {titleData.map((title, k) =>
              item[title.fieldName] ? (
                <td key={'column' + k}>{item[title.fieldName]}</td>
              ) : (
                <td key={`icon${k}`}>
                  {title.icons?.map((icon, index) => (
                    <Icon key={`icons${index}`} icon={'fa' + icon} />
                  ))}
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
