import { BankFilled, UserOutlined } from '@ant-design/icons';
import {
  ElementType
} from 'react';
import { AccountType, Status } from '../../api/generated/model';

export type UserStatusModelType =
  | {
      className: string;
      label: string;
    }
  | undefined;

export const getUserStatusModel = (
  status: Status,
): UserStatusModelType | undefined => {
  let statusModel: UserStatusModelType;
  switch (status) {
    case Status.Active:
      statusModel = {
        className: 'bg-green',
        label: 'Active',
      };
      break;

    case Status.Passive:
      statusModel = {
        className: 'bg-red',
        label: 'Passive',
      };
      break;

    default:
      break;
  }

  return statusModel;
};

export type AccountTypeModelType =
  | {
      label: string;
      Icon: ElementType;
    }
  | undefined;

export const getAccountTypeModel = (
  accountType: AccountType,
): AccountTypeModelType | undefined => {
  let accountTypeModel: AccountTypeModelType;
  switch (accountType) {
    case AccountType.Personal:
      accountTypeModel = {
        label: 'Personal',
        Icon: UserOutlined,
      };
      break;

    case AccountType.Corporate:
      accountTypeModel = {
        label: 'Corporate',
        Icon: BankFilled,
      };
      break;

    default:
      break;
  }

  return accountTypeModel;
};
