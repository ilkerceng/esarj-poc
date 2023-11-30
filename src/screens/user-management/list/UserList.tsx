import { TableColumnsType } from 'antd';
import { useState } from 'react';
import { useListUsers } from '../../../api/generated/esarj-api';
import { UserListItem } from '../../../api/generated/model';
import { ID } from '../../../lib/types';
import { UserManagementItem } from '../item/UserManagementItem';


export const UserList = (props:) => {
  const [searchText, setSearchText] = useState<string>();
  const { data, isPending } = useListUsers({ name: searchText });
  const [selectedUser, setSelectedUser] = useState<ID>();

  return (
    <SearchTable<UserListItem>
      searchProps={{
        value: searchText,
        onChange: e => setSearchText(e.target.value),
      }}
      tableProps={{
        rowKey: 'id',
        loading: isPending,
        dataSource: data || [],
        columns,
        pagination: {
          pageSize: 6,
        },
        onRow: (record, rowIndex) => {
          return {
            onClick: event => {
              setSelectedUser(record.id);
            },
            className: 'cursor-pointer',
          };
        },
      }}
      renderOnClickRecord={() => {
        return selectedUser ? (
          <UserManagementItem
            onClose={() => {
              setSelectedUser(undefined);
            }}
          />
        ) : null;
      }}
    />
  );
};
