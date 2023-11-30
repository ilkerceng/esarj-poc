import { Meta, StoryObj } from '@storybook/react';
import { Search } from '../search/Search';
import { Status } from './Status';

const meta = {
  title: 'components/Status',
  component: Status,
  tags: ['autodocs'],
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    status: 'warning',
  },
} satisfies Story;

export const Error = {
  args: {
    status: 'error',
  },
} satisfies Story;

export const Warning = {
  args: {
    status: 'warning',
  },
} satisfies Story;
