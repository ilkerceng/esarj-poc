import { TableProps } from 'antd';
import { UserListItem } from '../../../api/generated/model';
import CustomTable from '../../../components/custom-table/CustomTable';
import { ID } from '../../../lib/types';
import { columns } from './columns';

export type UserListProps<T> = {
  onSelectUser: (id: ID) => void;
} & TableProps<T>;

export const UserList = ({
  onSelectUser,
  dataSource = [],
  ...tableProps
}: UserListProps<UserListItem>) => {
  return (
    <CustomTable<UserListItem>
      {...{
        scroll: { x: '600px' },
        rowKey: 'id',
        dataSource,
        columns,
        pagination: {
          pageSize: 5,
        },
        onRow: record => {
          return {
            onClick: () => {
              onSelectUser(record.id);
            },
            className: 'cursor-pointer',
          };
        },
        ...tableProps,
      }}
    />
  );
};
