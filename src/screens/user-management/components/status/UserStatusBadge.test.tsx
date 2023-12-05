// import { render } from '@testing-library/react';
import { UserStatusBadge } from './UserStatusBadge';
import renderer from 'react-test-renderer';
import { Status } from '../../../../api/generated/model';

test('renders correctly', () => {
  const tree = renderer
    .create(<UserStatusBadge status={Status.Active} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// test('classNames set correctly', () => {
//   const { container } = render(<UserStatusBadge status={Status.Passive} />);
//   expect(container.firstChild).toHaveClass('');
// });
