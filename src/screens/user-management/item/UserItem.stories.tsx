import { Meta, StoryObj } from '@storybook/react';
import { UserManagementItem } from './UserManagementItem';
import { accountTypes, statuses } from '../../../lib/constants';
import { getPostUserMock } from '../../../api/generated/esarj-api.msw';
import { User } from '../../../api/generated/model';

const meta = {
  title: 'screens/User Management / User Form',
  component: UserManagementItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserManagementItem>;

export default meta;

type Story = StoryObj<typeof meta>;

const commonProps = {
  accountTypes: accountTypes,
  statuses: statuses,
  onClose() {},
  isNewItem: false,
  userData: getPostUserMock() as unknown as User,
  id: '0001213' as unknown as number,
};

export const NewUser = {
  name: 'New User',
  args: {
    ...commonProps,
    id: 0,
    isNewItem: true,
    userData: undefined,
  },
} satisfies Story;

export const ExistingUser = {
  name: 'Existing User',
  args: {
    ...commonProps,
  },
} satisfies Story;
