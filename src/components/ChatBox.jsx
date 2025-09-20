import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Box,
  TextField,
  Paper,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import axios from "axios";

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Xin chào, tôi là Nayami Bot 🤖", sender: "bot" },
    { text: "Tôi có thể giúp gì cho bạn hôm nay?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    let uid = localStorage.getItem("chatUserId");
    if (!uid) {
      uid = "user_" + Math.random().toString(36).substring(2, 9);
      localStorage.setItem("chatUserId", uid);
    }
    setUserId(uid);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/chatbot/chat`, {
        question: input,
        userId: userId,
      });

      setMessages([
        ...newMessages,
        { text: res.data.data || "Bot không trả lời được 😅", sender: "bot" },
      ]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        { text: "Lỗi khi gọi server 🚨", sender: "bot" },
      ]);
    }

    setInput("");
  };

  return (
    <Paper
      elevation={6}
      sx={{
        width: 320,
        height: 450,
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        marginRight: 5,
      }}
    >
      <Box
        sx={{
          px: 2,
          py: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#0da487",
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold" color="white">
          🤖 Nayami Bot
        </Typography>
        <IconButton size="small" sx={{ color: "white" }} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          p: 2,
          overflowY: "auto",
          bgcolor: "#f5f5f5",
        }}
      >
        {messages.map((msg, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              mb: 1,
              gap: 1,
            }}
          >
            {msg.sender === "bot" && (
              <Avatar sx={{ bgcolor: "grey.400", width: 28, height: 28 }}>
                <SmartToyIcon fontSize="small" />
              </Avatar>
            )}

            <Box
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                bgcolor: msg.sender === "user" ? "primary.main" : "grey.300",
                color: msg.sender === "user" ? "white" : "black",
                maxWidth: "70%",
              }}
            >
              <Typography variant="body2" component="div"
                sx={{ wordBreak: "break-word", overflowWrap: "anywhere", maxWidth: "90%", }}>
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </Typography>
            </Box>

            {/* Avatar bên phải nếu là user */}
            {msg.sender === "user" && (
              <Avatar sx={{ bgcolor: "#0da487", width: 28, height: 28 }}>
                <PersonIcon fontSize="small" />
              </Avatar>
            )}
          </Box>
        ))}
      </Box>

      {/* Input */}
      <Box
        sx={{
          p: 1,
          display: "flex",
          gap: 1,
          borderTop: "1px solid #ddd",
          bgcolor: "white",
        }}
      >
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={sendMessage}
          style={{
            borderRadius: "8px",
            padding: "6px 12px",
            backgroundColor: "#0da487",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Gửi
        </button>
      </Box>
    </Paper>
  );
};

export default ChatBox;
