import { TableColumnsType } from 'antd';
import {
  AccountType,
  Status,
  UserListItem,
} from '../../../api/generated/model';
import { ID } from '../../../lib/types';
import { UserID } from '../components/user-id/UserId';
import { UserStatusBadge } from '../components/status/UserStatusBadge';
import { getAccountTypeModel, getUserStatusModel } from '../utils';

const PersonCompanyColumn = ({
  name,
  status,
}: {
  name: string;
  status: Status;
}) => (
  <div>
    <UserStatusBadge status={status} />
    <span>{name}</span>
  </div>
);

const UserStatusColumn = ({ status }: { status: Status }) => {
  const statusModel = getUserStatusModel(status);

  return statusModel ? (
    <span
      className={statusModel.className + ' p-2 rounded-lg font-bold opacity-60'}
    >
      {statusModel.label}
    </span>
  ) : null;
};

const AccountTypeColumn = ({ accountType }: { accountType: AccountType }) => {
  const accountTypeModel = getAccountTypeModel(accountType);

  return accountTypeModel ? (
    <span>
      <accountTypeModel.Icon className="mr-2" />
      {accountTypeModel?.label}
    </span>
  ) : null;
};

const UserIDColumn = ({ id }: { id: ID }) => <UserID id={id} />;

export const columns: TableColumnsType<UserListItem> = [
  {
    title: 'Person / Company',
    dataIndex: 'personCompany',
    key: 'personCompany',
    render: (value, record) => (
      <PersonCompanyColumn name={value} status={record.status} />
    ),
    sorter: (a, b) =>
      a.personCompany
        .toLocaleLowerCase()
        .localeCompare(b.personCompany.toLocaleLowerCase()),
  },
  {
    title: 'Account Type',
    dataIndex: 'accountType',
    key: 'accountType',
    render: value => <AccountTypeColumn accountType={value} />,
    sorter: (a, b) => a.status - b.status,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (value: Status) => <UserStatusColumn status={value} />,
    sorter: (a, b) => a.status - b.status,
  },
  {
    title: 'Customer Id',
    dataIndex: 'customerId',
    key: 'customerId',
    render: (value: ID) => <UserIDColumn id={value} />,
    sorter: (a, b) => parseInt(a.customerId) - parseInt(b.customerId),
  },
];
