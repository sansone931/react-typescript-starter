import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.main};
`;

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header>React TypeScript Starter</Header>
  </ThemeProvider>
);
