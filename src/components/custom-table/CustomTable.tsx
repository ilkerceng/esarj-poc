import { Table, TableProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { PropsWithChildren } from 'react';

function CustomTable<T extends AnyObject>(
  tableProps: PropsWithChildren<TableProps<T>>,
) {
  return <Table<T> {...tableProps} />;
}

export default CustomTable;
