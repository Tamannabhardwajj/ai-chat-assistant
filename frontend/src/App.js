import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState(() => {
    const saved = localStorage.getItem("chat");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(chatHistory));
  }, [chatHistory]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newHistory = [...chatHistory, { sender: "You", text: message, time: timestamp }];
    setChatHistory(newHistory);
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:5000/chat", {
        message,
        history: newHistory.map(m => m.text).slice(0, -1),
      });
      const aiTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setChatHistory([...newHistory, { sender: "AI", text: res.data.reply, time: aiTimestamp }]);
    } catch (error) {
      alert("Something went wrong: " + error.message);
    }

    setLoading(false);
  };

  const clearChat = () => {
    setChatHistory([]);
    setMessage("");
  };

  const fillPrompt = (prompt) => {
    setMessage(prompt);
  };

  const handleVoice = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = (event) => {
      setMessage(event.results[0][0].transcript);
    };
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <div className="header">
        AI Chat Assistant
        <button className="mode-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="chat-box">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === "You" ? "user" : "ai"}`}>
            <div className="sender">{msg.sender} • {msg.time}</div>
            <div>{msg.text}</div>
          </div>
        ))}
        {loading && <div className="message ai">AI is typing...</div>}
      </div>

      <div className="buttons">
        <button onClick={clearChat}>Clear</button>
        <button onClick={() => fillPrompt("Tell me a fun fact!")}>Fun Fact</button>
        <button onClick={() => fillPrompt("What's the weather today?")}>Weather</button>
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={handleVoice}>🎤</button>
      </div>
    </div>
  );
}

export default App;
