import { render } from '@testing-library/react';
import ResultGrid from '../src/app/ResultGrid';

test('ResultGrid renders without crashing', () => {
  render(
    <ResultGrid results={{ boldSerif: '', boldSans: '', italicSerif: '', italicSans: '' }} />
  );
});
