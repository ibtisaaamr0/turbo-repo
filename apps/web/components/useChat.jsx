"use client";
import { useEffect, useRef, useState } from "react";

export default function useChat(username) {
  const [messages, setMessages] = useState([]);
  const wsRef = useRef(null);

  const connect = () => {
    if (wsRef.current) return;

    wsRef.current = new WebSocket("ws://localhost:4000");

    wsRef.current.onopen = () => {
      console.log("Connected to WebSocket");
    };

    wsRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "new_message") {
        setMessages((prev) => [...prev, data]);
      }
      if (data.type === "history") {
        setMessages(data.messages || []);
      }
    };

    wsRef.current.onclose = () => {
      console.log("WebSocket closed");
      wsRef.current = null;
    };
  };

  const disconnect = () => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
  };

  const sendMessage = (message) => {
    if (!username) return;
    if (!wsRef.current) connect();

    const msg = {
      user: username,
      message,
    };

    wsRef.current?.send(JSON.stringify(msg));
    setMessages((prev) => [...prev, msg]);
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      disconnect();
    };
  }, []);

  return { messages, sendMessage, connect, disconnect };
}
