// src/features/chat/MessageList.js
import React, { useEffect, useRef, useTransition } from 'react';
import { useSelector } from 'react-redux';
import { Box, Fade } from '@mui/material';
import MessageItem from './MessageItem';

const MessageList = () => {
  const messages = useSelector((state) => state.chat.messages);
  const messagesEndRef = useRef(null);
  const [isPending, startTransition] = useTransition();

  // Scroll to the bottom when messages change
  useEffect(() => {
    startTransition(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [messages, startTransition]);

  return (
    <Box
      flex={1}
      overflow="auto"
      padding={2}
      bgcolor="#eaeaea"
    >
      {messages.map((msg) => (
        <Fade in key={msg.id} timeout={500}>
          <div>
            <MessageItem message={msg} />
          </div>
        </Fade>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default MessageList;
