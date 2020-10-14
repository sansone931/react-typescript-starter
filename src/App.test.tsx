import { render } from '@testing-library/react';
import React from 'react';

import { App } from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement: HTMLElement = getByText('React TypeScript Starter');
  expect(titleElement).toBeInTheDocument();
});