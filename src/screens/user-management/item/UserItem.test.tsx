import renderer from 'react-test-renderer';
import { UserItem } from './UserItem';
import { accountTypes, statuses } from '../../../lib/constants';

//TODO: Tabs gives errors addEventListener error. https://github.com/ant-design/ant-design/issues/13620
jest.mock('rc-tabs/lib/Tabs', () => ({children}: any) => children);

test('new user renders correctly', () => {
  const tree = renderer
    .create(
      <UserItem
        id={0}
        isNewItem={false}
        accountTypes={accountTypes}
        statuses={statuses}
        onClose={() => {}}
        userData={undefined}
        isLoadingItem={false}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// test('classNames set correctly', () => {
//   const { container } = render(<UserStatusBadge status={Status.Passive} />);
//   expect(container.firstChild).toHaveClass('');
// });
