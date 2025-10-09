import { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '../../apis/chatbotApi';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await sendChatMessage(inputMessage, conversationId);

      if (response.conversationId) {
        setConversationId(response.conversationId);
      }

      const botMessage = {
        type: 'bot',
        content: response.message,
        suggestedProducts: response.suggestedProducts || [],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage = {
        type: 'bot',
        content: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  // Format message content để dễ đọc hơn
  const formatMessageContent = (content) => {
    // Tách các đoạn văn dựa trên 2 dấu xuống dòng
    const paragraphs = content.split('\n\n');

    return paragraphs.map((paragraph, pIndex) => {
      // Kiểm tra xem đoạn văn có phải là danh sách không (bắt đầu bằng số hoặc dấu -)
      const listItemMatch = paragraph.match(/^(\d+\.|[-*])\s(.+)/);

      if (listItemMatch) {
        // Đây là một mục trong danh sách
        const lines = paragraph.split('\n');
        return (
          <div key={pIndex} className="message-list">
            {lines.map((line, lIndex) => {
              const itemMatch = line.match(/^(\d+\.|[-*])\s(.+)/);
              if (itemMatch) {
                const [, bullet, lineContent] = itemMatch;
                // Xử lý ** trong content
                const cleanContent = lineContent.replace(/\*\*/g, '');
                return (
                  <div key={lIndex} className="message-list-item">
                    <span className="list-bullet">{bullet}</span>
                    <span className="list-content">{cleanContent}</span>
                  </div>
                );
              }
              // Xử lý ** trong subtext
              const cleanLine = line.replace(/\*\*/g, '');
              return (
                <div key={lIndex} className="message-subtext">
                  {cleanLine}
                </div>
              );
            })}
          </div>
        );
      }

      // Xử lý ** trong đoạn văn thông thường - chỉ loại bỏ ** và giữ nội dung
      const cleanParagraph = paragraph.replace(/\*\*/g, '');
      return (
        <p key={pIndex} className="message-paragraph">
          {cleanParagraph}
        </p>
      );
    });
  };

  return (
    <div className="chatbot-container">
      {/* Floating Button */}
      <button
        className={`chatbot-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <div>
                <h3>Nayami Shop</h3>
                <p>Tư vấn sản phẩm</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="chatbot-welcome">
                <h4>👋 Xin chào!</h4>
                <p>Chúng tôi có thể giúp gì cho bạn hôm nay?</p>
              </div>
            )}

            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message ${message.type}`}>
                <div className="message-content">
                  <div className="message-text">
                    {formatMessageContent(message.content)}
                  </div>

                  {/* Hiển thị sản phẩm gợi ý */}
                  {message.suggestedProducts &&
                    message.suggestedProducts.length > 0 && (
                    <div className="suggested-products">
                      <div className="suggested-products-header">
                        <h4>Sản phẩm gợi ý cho bạn</h4>
                      </div>
                      <div className="products-list">
                        {message.suggestedProducts.map((product) => (
                          <a
                            key={product.id}
                            href={product.link}
                            className="product-card"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={product.image} alt={product.name} />
                            <div className="product-info">
                              <h5>{product.name}</h5>
                              <p className="product-price">
                                {new Intl.NumberFormat('vi-VN', {
                                  style: 'currency',
                                  currency: 'VND',
                                }).format(product.unitPrice)}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString('vi-VN', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="chatbot-message bot">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form className="chatbot-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập tin nhắn..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !inputMessage.trim()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
