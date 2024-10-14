// src/features/chat/ChatWindow.js
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
      padding={2}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 600,
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          bgcolor="primary.main"
          color="primary.contrastText"
          padding={2}
        >
          <Typography variant="h6">Chat Interface</Typography>
        </Box>
        <MessageList />
        <MessageInput />
      </Paper>
    </Box>
  );
};

export default ChatWindow;
