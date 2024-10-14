
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const MessageItem = ({ message }) => {
  const isCurrentUser = message.sender.id === 'user1';

  return (
    <Box
      display="flex"
      flexDirection={isCurrentUser ? 'row-reverse' : 'row'}
      alignItems="center"
      marginBottom={2}
    >
      <Avatar sx={{ bgcolor: isCurrentUser ? 'secondary.main' : 'primary.main', margin: 1 }}>
        {isCurrentUser ? 'You' : message.sender.name.charAt(0)}
      </Avatar>
      <Box
        bgcolor={isCurrentUser ? 'secondary.light' : 'primary.light'}
        color="text.primary"
        padding={1}
        borderRadius={2}
        maxWidth="70%"
      >
        <Typography variant="body1">{message.text}</Typography>
        <Typography variant="caption" display="block" textAlign="right">
          {message.timestamp}
        </Typography>
      </Box>
    </Box>
  );
};

export default MessageItem;
