import { Meta, StoryObj } from '@storybook/react';
import { UserList } from './UserList';
import { getListUsersMock } from '../../../api/generated/esarj-api.msw';
import { UserListItem } from '../../../api/generated/model';

const meta = {
  title: 'screens/User Management / User List',
  component: UserList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    dataSource: getListUsersMock() as UserListItem[],
  },
} satisfies Story;
