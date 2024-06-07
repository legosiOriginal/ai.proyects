import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'AI Domain Assistant',
  initialMessages: [createChatBotMessage(`Hi! How can I help you with your domains today?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;
