import { TableColumnsType, TableProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { useListUsers } from '../../api/generated/esarj-api';
import { UserListItem } from '../../api/generated/model';
import CustomTable from '../../components/custom-table/CustomTable';
import { Search, SearchProps } from '../../components/search/Search';
import { ID } from '../../lib/types';
import { UserManagementView } from './UserManagementView';
import { UserManagementItem } from './item/UserManagementItem';

const columns: TableColumnsType<UserListItem> = [
  {
    title: 'Person / Company',
    dataIndex: 'personCompany',
    key: 'personCompany',
  },
  {
    title: 'Account Type',
    dataIndex: 'accountType',
    key: 'accountType',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: value => (value ? 'Active' : 'Passive'),
  },
  {
    title: 'Customer Id',
    dataIndex: 'customerId',
    key: 'customerId',
  },
];

export const UserManager = () => {
  const [searchText, setSearchText] = useState<string>();
  const { data, isPending } = useListUsers({ name: searchText });
  const [selectedUser, setSelectedUser] = useState<ID>();

  return (
    <UserManagementView
      SearchComponent={
        <Search
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      }
      TableComponent={
        <CustomTable<UserListItem>
          {...{
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
        />
      }
      RecordDetailComponent={
        selectedUser ? (
          <UserManagementItem
            onClose={() => {
              setSelectedUser(undefined);
            }}
          />
        ) : null
      }
    />
  );
};
