/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import { Table } from 'antd';

function BookList({ books }) {
  const dataSource = [];
  const columns = [
    {
      title: 'key',
      dataIndex: 'key',
      key: 'key',
      width: 25,
      className: 'table-row',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      width: 25,
      className: 'table-row',
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
      width: 25,
      className: 'table-row',
    },
    {
      title: 'recos',
      dataIndex: 'recos',
      key: 'recos',
      width: 25,
      className: 'table-row',
    },
  ];
  for (const book of books) {
    dataSource.push({
      key: book.id,
      name: book.name,
      age: book.age,
      recos: book.recos,
    });
  }

  return (
    <div className="tab-pane">
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ y: '100vh' }}
        pagination={false}
      />
    </div>
  );
}

export default BookList;
