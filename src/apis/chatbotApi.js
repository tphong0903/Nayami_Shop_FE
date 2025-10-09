import axios from 'axios';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';


export const sendChatMessage = async (message, conversationId = null) => {
  try {
    const requestData = {
      message: message,
    };

    if (conversationId) {
      requestData.conversationId = conversationId;
    }

    const response = await axios.post(
      `${API_BASE_URL}/api/chatbot/chat`,
      requestData
    );
    return response.data;
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
};
