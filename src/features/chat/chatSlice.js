import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  currentUser: {
    id: 'user1',
    name: 'You',
  },
  otherUsers: [
    {
      id: 'user2',
      name: 'ChatBot',
    },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        text: action.payload,
        sender: state.currentUser,
        timestamp: new Date().toLocaleTimeString(),
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        text: action.payload,
        sender: state.otherUsers[0],
        timestamp: new Date().toLocaleTimeString(),
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
