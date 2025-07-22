# 💬 AI Chat Assistant (Flipkart Grid 7.0 Submission)

An interactive AI-powered chatbot built using **React** and **Flask**, designed for real-time customer support and demo conversations — **no OpenAI API needed!**

## 🚀 Features
- 🧠 Rule-based smart replies (no external API required)
- 💬 Real-time chat interface with typing animation
- 🧹 Clear Chat & Predefined Prompts
- 💾 Lightweight and beginner-friendly
- 🌙 Modern dark-themed UI

## 📸 Screenshot
![Chat Screenshot](./frontend/screenshot.png)

## 🛠️ Tech Stack

| Frontend   | Backend  | Styling     |
|------------|----------|-------------|
| React.js   | Flask    | CSS3        |
| Axios      | Python   | Flexbox/Grid|

## 🏁 Getting Started (Run Locally)

### 1. Clone the Repo
```bash
git clone https://github.com/Tamannabhardwajj/ai-chat-assistant.git
cd ai-chat-assistant
```

### 2. Run the Backend (Flask)
```bash
cd backend
pip install flask flask-cors
python app.py
```

> Backend runs at: http://localhost:5000

### 3. Run the Frontend (React)
```bash
cd ../frontend
npm install
npm start
```

> Frontend runs at: http://localhost:3000

## 📁 Folder Structure
```
ai-chat-assistant/
├── backend/
│   └── app.py
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   ├── screenshot.png
│   └── package.json
└── README.md
