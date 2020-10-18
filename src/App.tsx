import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages';
import { GlobalStyle, theme } from './styles';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);
