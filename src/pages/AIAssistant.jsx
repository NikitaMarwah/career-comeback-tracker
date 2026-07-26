import { useState } from "react";
import { askGemini } from "../services/gemini";
import ChatMessage from "../components/ChatMessage";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Paper,
} from "@mui/material";

function AIAssistant() {
  const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleAsk = async () => {
    if (!prompt.trim()) {
      return;
    }

    const userMessage = {
      role: "user",
      text: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const aiReply = await askGemini(prompt);
      console.log("Prompt is:", prompt);
      const aiMessage = {
        role: "ai",
        text: aiReply,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setPrompt("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

      return (
  <Container maxWidth="md" sx={{ mt: 5 }}>
    <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>

      <Typography variant="h4" gutterBottom>
        🤖 AI Career Assistant
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={3}>
        Ask anything about React, JavaScript, AI, interviews or your career.
      </Typography>

      <TextField
        fullWidth
        sx={{ mt: 2 }}
        multiline
        rows={4}
        placeholder="Ask anything..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          onClick={handleAsk}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask AI"}
        </Button>
      </Box>

      <Box mt={4}>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            role={message.role}
            text={message.text}
          />
        ))}
      </Box>

    </Paper>
  </Container>
);
}

export default AIAssistant;
