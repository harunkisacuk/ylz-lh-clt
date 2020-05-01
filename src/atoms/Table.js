import React from 'react';
import { decamelize } from '../helper/functions';
import { Table as TableB } from 'react-bootstrap';
import RenderBoolean from './RenderBoolean';
import RenderAddress from './RenderAddress';
import Modal from './Modal';
import Icon from './Icon';
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
    <>
      <TableB
        striped={striped}
        bordered={bordered}
        hover={hover}
        size={size}
        responsive={responsive}
        table={table}
      >
        {
          // [
          //   {
          //       title: 'ID',
          //       fieldName: 'id'
          //     },
          //     {
          //     title:'First Name',
          //     fieldName:'firstName'
          //   },
          //   {
          //     title:'Last Name',
          //     fieldName:'lastName'
          //   },
          //   {
          //     title:'Phone',
          //     fieldName:'phone'
          //   },
          //   {
          //     title:'Address',
          //     fieldName:'address'
          //   }
          //  ]
        }
        <thead>
          <tr>
            {Object.keys(data[0]).map((item, k) => (
              <th className="table-head" scope="col" key={k}>
                {decamelize(item, ' ')}
              </th>
            ))}
            <th>#</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c, index) => (
            <tr className="table-tr" key={index} name={index}>
              <th>{index + 1}</th>
              {Object.values(c).map(
                (value, i) =>
                  i !== 0 && (
                    <td key={i}>
                      {typeof value === 'boolean' ? (
                        <RenderBoolean value={value} />
                      ) : Object.keys(c)[i] === 'address' ? (
                        <RenderAddress
                          key
                          onClick={(e) =>
                            setModalShow(
                              true,
                              setClientAddress(c.address),
                              setclientName(c.firstName + ' ' + c.lastName)
                            )
                          }
                          addresses={Object.values(c)[i]}
                        />
                      ) : (
                        value || ' '
                      )}
                    </td>
                  )
              )}
              <td>
                <Icon icon="faPenNib" size="sm" />
              </td>
              <td>
                <Icon icon="faTrashAlt" size="sm" />
              </td>
            </tr>
          ))}
        </tbody>
        <Modal
          addresses={clientAddress}
          name={clientName}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </TableB>
    </>
  );
};

export default Table;
