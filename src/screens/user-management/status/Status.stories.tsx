import { Meta, StoryObj } from '@storybook/react';
import { UserStatusBadge } from './UserStatusBadge';
import { Status } from '../../../api/generated/model';

const meta = {
  title: 'components/User Status',
  component: UserStatusBadge,
  tags: ['autodocs'],
  argTypes: {
    status: {
      options: ['Active', 'Passive'],
      mapping: {
        Active: 1,
        Passive: 2,
      },
    },
  },
} satisfies Meta<typeof UserStatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    status: Status.Active,
  },
} satisfies Story;
