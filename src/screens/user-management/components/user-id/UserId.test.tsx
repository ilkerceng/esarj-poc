import { render } from '@testing-library/react';
import { UserID } from './UserId';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<UserID id="00123" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('set leading zeros opacity correctly', () => {
  const { container } = render(<UserID id="00123" />);
  expect(container.firstChild).toHaveClass('opacity-20');
});

test('renders id having leading zeros correctly', () => {
  const { getByText } = render(<UserID id="00123" />);

  const leadingZeros = getByText(/00/i);
  expect(leadingZeros).toBeInTheDocument();

  const otherParts = getByText(/123/i);
  expect(otherParts).toBeInTheDocument();
});

test('renders id does not have any leading zeros correctly', () => {
  const { getByText, queryByTestId } = render(<UserID id="12345" />);

  const leadingZeros = queryByTestId('leading-zeros');
  expect(leadingZeros).not.toBeInTheDocument();

  const otherParts = getByText(/12345/i);
  expect(otherParts).toBeInTheDocument();
});
