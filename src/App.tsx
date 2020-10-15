import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);
