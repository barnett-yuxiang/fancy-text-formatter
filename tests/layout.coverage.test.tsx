import { render } from '@testing-library/react';
import RootLayout from '../src/app/layout';

test('RootLayout renders without crashing', () => {
  render(
    <RootLayout>
      <div>child</div>
    </RootLayout>
  );
});