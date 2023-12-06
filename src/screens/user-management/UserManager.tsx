import { PlusCircleFilled } from '@ant-design/icons';
import { Badge, Typography } from 'antd';
import { useState } from 'react';
import { useListUsers } from '../../api/generated/esarj-api';
import { Search } from '../../components/search/Search';
import { ID } from '../../lib/types';
import { UserItemContainer } from './item/UserItemContainer';
import { UserList } from './list/UserList';
import { UserManagementView } from './views/UserManagementView';

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
        <UserList
          onSelectUser={id => {
            setSelectedUser(id);
          }}
          dataSource={data}
          loading={isPending}
        />
      }
      RecordDetailComponent={
        selectedUser !== undefined ? (
          <UserItemContainer
            key={selectedUser}
            id={selectedUser}
            onSuccessUpdateUser={() => {
              setSelectedUser(undefined);
            }}
            onClose={() => {
              setSelectedUser(undefined);
            }}
          />
        ) : null
      }
    />
  );
};
