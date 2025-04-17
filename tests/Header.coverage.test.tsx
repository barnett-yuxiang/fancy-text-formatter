import { render } from '@testing-library/react';
import Header from '../src/app/Header';

test('Header renders without crashing', () => {
  render(<Header />);
});