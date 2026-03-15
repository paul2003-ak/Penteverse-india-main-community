import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "system", content: "Pentaverse System Online. How can I help you today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");
    
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setIsTyping(true);

    try {
      const response = await fetch("https://pentaverse-rag-chatbot.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMsg }),
      });

      const data = await response.json();
      const botReply = data.reply || data.answer || data.response || "No response received.";

      setMessages((prev) => [...prev, { role: "assistant", content: botReply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Error: Could not connect to the server." }]);
      console.log(error)
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* --- FLOATING TOGGLE --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-black border-2 border-cyan-500 rounded-2xl flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-105 transition-all"
      >
        <Icon 
          icon={isOpen ? "lucide:x" : "lucide:message-square"} 
          className="text-cyan-400 text-2xl" 
        />
      </button>

      {/* --- CHAT WINDOW (Mobile Responsive) --- */}
      <div 
        className={`fixed z-[99] transition-all duration-300 ease-in-out flex flex-col overflow-hidden bg-[#0a0f14] border border-cyan-900/50 shadow-2xl
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
          /* Mobile: Full Screen | Desktop: Fixed dimensions */
          bottom-0 right-0 w-full h-full sm:bottom-24 sm:right-6 sm:w-[400px] sm:h-[600px] sm:rounded-2xl`}
      >
        {/* HEADER */}
        <div className="p-4 bg-gradient-to-r from-cyan-900/80 to-emerald-900/80 backdrop-blur-md flex justify-between items-center border-b border-cyan-500/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <Icon icon="lucide:bot" className="text-cyan-400 text-xl" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Pentaverse AI</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <p className="text-[10px] text-emerald-400 uppercase tracking-wider font-medium">System Ready</p>
              </div>
            </div>
          </div>
          {/* Mobile Close Button */}
          <button onClick={() => setIsOpen(false)} className="sm:hidden text-white/50">
            <Icon icon="lucide:chevron-down" className="text-2xl" />
          </button>
        </div>

        {/* CHAT AREA */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-cyan-900">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div 
                className={`max-w-[85%] p-3 text-[15px] leading-relaxed shadow-sm
                  ${msg.role === "user" 
                    ? "bg-cyan-600 text-white rounded-2xl rounded-tr-none" 
                    : "bg-[#16202a] text-gray-200 border border-cyan-900/30 rounded-2xl rounded-tl-none"
                  }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-1 p-2">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" />
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT AREA */}
        <form onSubmit={handleSend} className="p-4 bg-[#0d131a] border-t border-cyan-900/30">
          <div className="flex items-center gap-2 bg-[#16202a] border border-cyan-900/50 rounded-xl px-3 py-1 focus-within:border-cyan-500/50 transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-transparent py-2 text-white text-sm outline-none placeholder:text-gray-500"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-1.5 text-cyan-400 hover:text-emerald-400 disabled:opacity-30 transition-colors"
            >
              <Icon icon="lucide:send-horizontal" className="text-xl" />
            </button>
          </div>
          <p className="text-[10px] text-center text-gray-600 mt-2">Powered by Pentaverse Core</p>
        </form>
      </div>
    </>
  );
};

export default ChatBot;