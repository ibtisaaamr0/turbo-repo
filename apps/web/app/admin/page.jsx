"use client";

import { useState } from "react";
import useChat from "../../components/useChat";
import { FaMessage, FaUserTie } from "react-icons/fa6";

export default function AdminChat() {
  const { messages, sendMessage } = useChat();
  const [input, setInput] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  // Get unique users excluding Admin
  const users = [...new Set(messages.map((msg) => msg.user).filter(u => u !== "Admin"))];

  const handleSend = () => {
    if (input.trim() && selectedUser) {
      sendMessage("Admin", input, selectedUser);
      setInput("");
    }
  };

  return (
    <div className="flex justify-center mt-20 px-2 md:mt-56">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4">

        {/* Users List */}
        <div className="w-full md:w-1/4 bg-gradient-to-b from-purple-600/30 via-indigo-600/30 to-blue-600/30 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg">
          <h2 className="font-semibold mb-2 text-black text-lg">Users</h2>
          {users.length === 0 && <p className="text-gray-300">No users yet</p>}
          {users.map((user, idx) => (
            <div
              key={user + idx}
              className={`p-2 cursor-pointer rounded-lg mb-1 transition-colors duration-200 ${
                selectedUser === user
                  ? "bg-purple-950 text-white"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              onClick={() => setSelectedUser(user)}
            >
              {user}
            </div>
          ))}
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-gradient-to-b from-purple-200/30 via-blue-900/60 to-purple-950/100 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-2xl h-[70vh] md:h-[70vh]">
          <div className="flex-1 overflow-y-auto px-2 py-2 space-y-2">
            {selectedUser ? (
              messages
                .filter(
                  (msg) =>
                    msg.user === selectedUser ||
                    (msg.user === "Admin" && msg.recipient === selectedUser)
                )
                .map((msg, i) => {
                  const isAdmin = msg.user === "Admin";
                  const Icon = isAdmin ? FaUserTie : FaMessage;

                  return (
                    <div
                      key={msg.id || msg.user + msg.message + i}
                      className={`flex flex-col ${isAdmin ? "items-end" : "items-start"} gap-1`}
                    >
                      {/* Username + Icon */}
                      <div className="flex gap-2 items-center">
                        <Icon className="text-3xl" />
                        <strong className="text-2xl">{msg.user}:</strong>
                      </div>

                      {/* Message Bubble */}
                      <span
                        className={`p-3 rounded-full text-white text-2xl italic max-w-[90%] break-words ${
                          isAdmin ? "bg-indigo-500/60 self-end" : "bg-purple-800/60 self-start"
                        }`}
                      >
                        {msg.message}
                      </span>
                    </div>
                  );
                })
            ) : (
              <p className="text-gray-300 text-center mt-10">
                Select a user to view messages
              </p>
            )}
          </div>

          {/* Input Area */}
          {selectedUser && (
            <div className="flex flex-col md:flex-row mt-3 gap-2 w-full md:px-10">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={`Message ${selectedUser}...`}
                className="flex-1 bg-white/20 text-white placeholder-gray-300 p-3 rounded-xl md:rounded-l-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white px-5 py-3 md:rounded-r-xl rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
