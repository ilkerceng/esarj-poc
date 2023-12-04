import { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';

const meta = {
  title: 'components/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
} satisfies Story;
