import { AccountType, Status } from '../api/generated/model';

export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const accountTypes = [
  { id: AccountType.Personal, label: 'Personal' },
  { id: AccountType.Corporate, label: 'Corporate' },
];

export const statuses = [
  { id: Status.Active, label: 'Active' },
  { id: Status.Passive, label: 'Passive' },
];

export const enumsData = {
  accountTypes,
  statuses,
};
