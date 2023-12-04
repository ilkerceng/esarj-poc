import { Meta, StoryObj } from '@storybook/react';
import { UserManagementView } from './UserManagementView';
import { Button } from 'antd';

const meta = {
  title: 'components/User Management View',
  component: UserManagementView,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof UserManagementView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    SearchComponent: <div className="bg-red">Search Component Area</div>,
    TableComponent: <div className="bg-green">Table Component Area</div>,
    cardProps: {},
  },
} satisfies Story;

export const ShowDetail = {
  storyName: 'Show Details',
  args: {
    ...Default.args,
    RecordDetailComponent: (
      <div className="bg-yellow">Detail Component Area</div>
    ),
    cardProps: {},
  },
} satisfies Story;

export const DetailComponentCardProps = {
  name: 'List card props',
  args: {
    ...ShowDetail.args,
    cardProps: {
      title: 'User Detail',
      extra: <Button>Add</Button>,
    },
  },
} satisfies Story;
