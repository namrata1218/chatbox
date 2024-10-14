// src/App.js
import React from 'react';
import ChatWindow from './features/chat/ChatWindow';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatWindow />
    </ThemeProvider>
  );
};

export default App;
