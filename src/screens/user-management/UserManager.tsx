import { PlusCircleFilled } from '@ant-design/icons';
import { Badge, TableColumnsType, Typography } from 'antd';
import { useState } from 'react';
import { useListUsers } from '../../api/generated/esarj-api';
import { UserListItem } from '../../api/generated/model';
import CustomTable from '../../components/custom-table/CustomTable';
import { Search } from '../../components/search/Search';
import { ID } from '../../lib/types';
import { queryClient } from '../../queryClient';
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

const { Title } = Typography;

export const UserManager = () => {
  const [searchText, setSearchText] = useState<string>();
  const { data, isSuccess, isPending } = useListUsers({
    name: searchText,
  });
  const [selectedUser, setSelectedUser] = useState<ID | undefined>();

  return (
    <UserManagementView
      cardProps={{
        title: (
          <Title level={5}>
            <span className="mr-2">Users</span>
            {isSuccess ? (
              <Badge count={data.length} color="#777"></Badge>
            ) : null}
          </Title>
        ),
        extra: (
          <PlusCircleFilled
            className="cursor-pointer"
            onClick={() => {
              setSelectedUser(0);
            }}
          />
        ),
      }}
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
              pageSize: 5,
            },
            onRow: record => {
              return {
                onClick: () => {
                  setSelectedUser(record.id);
                },
                className: 'cursor-pointer',
              };
            },
          }}
        />
      }
      RecordDetailComponent={
        selectedUser !== undefined ? (
          <UserManagementItem
            id={selectedUser}
            onSuccessUpdateUser={() => {
              setSelectedUser(undefined);
            }}
            onClose={() => {
              // refetch users and updated user record
              queryClient.invalidateQueries({
                queryKey: ['/users', `/users/${selectedUser}`],
              });
              setSelectedUser(undefined);
            }}
          />
        ) : null
      }
    />
  );
};
