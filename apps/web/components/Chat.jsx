"use client";

import { useState } from "react";
import useChat from "./useChat";
import { FaWhatsapp } from "react-icons/fa6";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [hasName, setHasName] = useState(false);
  const [input, setInput] = useState("");

  const { messages, sendMessage, connect, disconnect } = useChat(
    hasName ? name : null
  );

  const handleSend = () => {
    if (!input.trim() || !hasName) return;
    sendMessage(input);
    setInput("");
  };

  const handleNameSubmit = () => {
    if (name.trim()) setHasName(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          onClick={() => {
            setOpen(true);
            connect();
          }}
          className="bg-gradient-to-r from-blue-500 via-blue-900 to-indigo-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          <FaWhatsapp className="text-4xl" />
        </button>
      )}

      {open && (
        <div className="w-[90vw] max-w-md h-[80vh] bg-gray-700/50 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-purple-500 via-blue-200 to-indigo-500 text-white rounded-t-2xl shadow-lg">
            <span className="text-lg font-bold tracking-wide">Live Chat</span>
            <button
              onClick={() => {
                setOpen(false);
                disconnect();
              }}
              className="text-white text-xl hover:scale-125 transition-transform"
            >
              ✕
            </button>
          </div>

          {/* Name form OR chat */}
          {!hasName ? (
            <div className="flex-1 flex flex-col justify-center items-center px-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="bg-white/20 text-black placeholder-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/30 mb-4 w-full max-w-xs text-center"
                onKeyDown={(e) => e.key === "Enter" && handleNameSubmit()}
              />
              <button
                onClick={handleNameSubmit}
                className="bg-gradient-to-r from-blue-500 via-gray-900 to-indigo-500 text-black px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Start Chat
              </button>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent">
                {messages.length === 0 && (
                  <div className="text-gray-300 text-center mt-4">
                    No messages yet...
                  </div>
                )}
                {messages.map((msg, i) => {
                  if (!msg?.user || !msg?.message) return null;
                  const isSelf = msg.user === name;
                  const isAI = msg.user === "AI Agent";
                  const isAdmin = msg.user === "Admin";

                  return (
                    <div
                      key={i + msg.user + msg.message}
                      className={`max-w-[75%] p-3 rounded-xl text-sm break-words ${
                        isSelf
                          ? "bg-blue-500 text-white self-end ml-auto animate-slideInRight"
                          : isAI
                          ? "bg-gray-200 text-black self-start animate-slideInLeft"
                          : isAdmin
                          ? "bg-green-500/40 text-black self-start animate-slideInLeft"
                          : "bg-purple-500/30 text-white self-start"
                      }`}
                    >
                      <strong className="block mb-1">{msg.user}:</strong>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: msg.message.replace(
                            /(https?:\/\/[^\s]+)/g,
                            '<a href="$1" target="_blank" class="text-blue-400 underline">$1</a>'
                          ),
                        }}
                      ></span>
                    </div>
                  );
                })}
              </div>

              {/* Input */}
              <div className="flex flex-col md:flex-row p-3 bg-white/10 border-t border-white/20 backdrop-blur-md gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/20 text-black placeholder-gray-300 p-3 rounded-xl md:rounded-l-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/30 transition-all duration-300"
                />
                <button
                  onClick={handleSend}
                  className="bg-gradient-to-r from-blue-500 via-gray-900 to-indigo-500 text-white px-5 py-3 md:rounded-r-xl rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Send
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
