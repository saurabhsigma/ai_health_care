import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize2, Maximize2, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hello! I'm your health assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
  
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
  
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
  
    try {
      const response = await fetch('https://api.cohere.ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_COHERE_API_KEY}`
        },
        body: JSON.stringify({
          model: 'command',
          prompt: userMessage.text,
          max_tokens: 100
        })
      });
  
      const data = await response.json();
      console.log("Full API Response:", data); // Debugging log
  
      // Fix: Extracting response correctly
      const botResponse = data.text?.trim() || "I'm not sure how to respond to that.";
  
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
  
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: 'Error fetching response from AI.',
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
  
    setIsTyping(false);
  };
  
  

  return (
    <div className="fixed bottom-4 right-4">
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white p-4 rounded-full shadow-lg">
        <MessageCircle className="h-6 w-6" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="bg-blue-500 p-4 flex justify-between items-center text-white">
              <span>Health Assistant</span>
              <button onClick={() => setIsOpen(false)}><X className="h-5 w-5" /></button>
            </div>
            <div className="p-4 h-64 overflow-y-auto">
              {messages.map(msg => (
                <div key={msg.id} className={clsx("p-2 rounded-lg my-2", msg.sender === 'user' ? "bg-blue-500 text-white" : "bg-gray-200 text-black")}>{msg.text}</div>
              ))}
              {isTyping && <div className="text-gray-500">Typing...</div>}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t">
              <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Type a message..."
              />
              <button onClick={handleSend} disabled={!inputValue.trim()} className="ml-2 bg-blue-500 text-white p-2 rounded">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;