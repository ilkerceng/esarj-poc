import { Meta, StoryObj } from '@storybook/react';
import { UserID } from './UserId';

const meta = {
  title: 'components/User Id',
  component: UserID,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserID>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    id: '00123213',
  },
} satisfies Story;

export const WithContainerProps = {
  args: {
    id: '00123213',
    leadingZerosContainerProps: { style: { color: 'red' } },
    numericIdContainerProps: { style: { fontSize: 24, color: 'green' } },
  },
} satisfies Story;
