import { useState } from "react";
import axios from "axios";

const Chat = () => {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const sendMessage = async () => {
        try {
            const res = await axios.post("http://localhost:3001/api/chat", { userMessage: message });
            setResponse(res.data.reply);
        } catch (error) {
            console.error("Chat Error:", error);
        }
    };

    return (
        <div>
            <h2>Health Chatbot</h2>
            <input type="text" placeholder="Ask a question..." onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
            <p>AI: {response}</p>
        </div>
    );
};

export default Chat;
