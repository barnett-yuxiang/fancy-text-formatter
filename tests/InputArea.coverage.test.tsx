import { render } from '@testing-library/react';
import InputArea from '../src/app/InputArea';

test('InputArea renders without crashing', () => {
  render(
    <InputArea value="" setValue={() => {}} onGenerate={() => {}} />
  );
});