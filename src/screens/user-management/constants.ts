import { BankOutlined, UserOutlined } from '@ant-design/icons';
import { AccountType } from '../../api/generated/model';

export const ACCOUNT_TYPE_MAP = {
  [AccountType.Personal]: UserOutlined,
  [AccountType.Corporate]: BankOutlined,
};
