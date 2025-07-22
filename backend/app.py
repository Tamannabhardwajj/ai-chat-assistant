from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # <== This line allows requests from other origins


# Very simple rule-based chatbot logic
def get_bot_reply(message):
    message = message.lower()
    if "hello" in message or "hi" in message:
        return "Hello! How can I assist you today?"
    elif "help" in message:
        return "Sure! I'm here to help. You can ask me about products, tracking, or anything else."
    elif "track" in message or "order" in message:
        return "Please provide your order ID to track it."
    elif "bye" in message:
        return "Goodbye! Have a great day 😊"
    else:
        return "I'm not sure how to respond to that. Try asking something else!"

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message", "")
    reply = get_bot_reply(user_message)
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)
