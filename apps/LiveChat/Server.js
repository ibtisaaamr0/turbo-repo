import { WebSocketServer } from "ws";
import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import { getAIReply } from "./ai/agent.js";
import { timeStamp } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../server/contacts.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error("DB connection failed:", err);
  else console.log("Connected to SQLite DB at", dbPath);
});


db.run(`
  CREATE TABLE IF NOT EXISTS conversations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT,
    conversation_json TEXT,
    timestamp INTEGER
  )
`);

const PORT = 4000;
const wss = new WebSocketServer({ port: PORT });

wss.on("connection", (ws) => {
  console.log("New client connected");

  const sessionId = Date.now().toString();
  const conversation = [];

  ws.on("message", async (msg) => {
    try {
      const data = JSON.parse(msg);

      conversation.push({
        role: data.user,
        message: data.message,
        timestamp: Date.now(),
      });

      const reply = await getAIReply(data.message, conversation);

      conversation.push({
        role: "AI Agent",
        message: reply,
        timestamp: Date.now(),
      });

      ws.send(
        JSON.stringify({
          type: "new_message",
          user: "AI Agent",
          message: reply,
        })
      );
    } catch (err) {
      console.error("Error handling message:", err);
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected, saving session...");

    db.run(
      "INSERT INTO conversations (session_id, conversation_json, timestamp) VALUES (?, ?, ?)",
      [sessionId, JSON.stringify(conversation), Date.now()]
    );
  });
});

console.log(`WebSocket server running on ws://localhost:${PORT}`);



// wss.on("connection", (ws)=>{
//   console.log("New client connected");

//   const sessionid=date.now().toString();
//   const conversation=[]

//   ws.on("message", async (msg)=>{
//     try{
//       const data=JSON.parse(msg);

//       conversation.push({
//         role:data.user,
//         message:data.message,
//         timeStamp:Date.now()  
//       })

//       const reply = await getAIReply(data.message,conversation);
//       conversation.push({
//         role:"AI Agent",
//         message:reply,
//         timeStamp:Date.now()
//       })
//       ws.send(
//         JSON.stringify({
//           type:"new_message",
//           user:"AI agent",
//           message:reply
//         })
//       )
//     } catch (err){
//       console.error("Error handling message:",err);
//     }

//   })
//   ws.close("close", ()=>{
//     db.run(`INSERT INTO conversations (session_id, conversation_json, timestamp) VALUES (?, ?, ?)`,
//     [sessionid, JSON.stringify(conversation), Date.now()]
//     )
//   })

// })

// console.log(`WebSocket server running on ws://localhost:${PORT}`);
