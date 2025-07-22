# AI Chat Assistant 🤖💬

A simple AI-powered chat assistant built using **React (frontend)** and **Flask (backend)**.  
It uses rule-based logic to respond to basic user queries and demonstrates full-stack integration with CORS and REST APIs.

---

## 📁 Project Structure

```
ai-chat-assistant/
│
├── backend/                # Flask backend
│   ├── app.py              # Main Flask app
│   └── ...                 # (venv is excluded)
│
├── frontend/               # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### ✅ Backend Setup (Flask)

1. Navigate to backend folder:

```bash
cd backend
```

2. Create virtual environment & install dependencies:

```bash
python -m venv venv
venv\Scripts\activate         # for Windows
pip install flask flask-cors
```

3. Run the backend:

```bash
python app.py
```

By default, it runs at:  
👉 `http://127.0.0.1:5000`

---

### ✅ Frontend Setup (React)

1. Navigate to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the React app:

```bash
npm start
```

Runs at:  
👉 `http://localhost:3000`

---

## ✨ Features

- ✅ React frontend with input form
- ✅ Flask backend with chatbot logic
- ✅ Cross-Origin Request handling with `flask-cors`
- ✅ Clean and minimal UI
- ✅ Easy to extend with ML/NLP models

---

## 📸 Demo Screenshot

![Demo UI](demo.png) <!-- Add your own screenshot here -->

---

## 🛠️ Future Improvements

- Integrate OpenAI or other LLM APIs
- Add user authentication
- Store chat history
- Enhance chatbot intelligence

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Feel free to fork, clone, and submit pull requests!

---

## 💡 Author

**Tamanna Bhardwaj**  
🔗 [GitHub](https://github.com/Tamannabhardwajj)
