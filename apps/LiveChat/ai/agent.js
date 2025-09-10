import OpenAI from "openai";
import dotenv from "dotenv";
import file from "../portfolio.json" with { type: "json" };

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

const knowledgeBase = {
  name: file.name,
  title: file.title,
  about: file.about,
  skills: file.skills,
  experience: file.experience,
  projects: file.projects,
  contact: file.contact,
};


export async function getAIReply(message, conversation) {
  try {
    const completion = await client.chat.completions.create({
      model: "openai/gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: `
You are Ibtisam Rashid’s portfolio assistant.

Knowledge Base:
${JSON.stringify(knowledgeBase, null, 2)}

Rules:
- Use only this Knowledge Base.
- If asked about skills, projects, experience, or contact, reply warmly using KB info.
- If outside KB, answer: "Sorry, I don’t know the answer to that."
- Never fabricate info.
- Replies should be friendly, professional, and easy to read.
          `,
          
        },
        ...conversation.map((c)=>({
          role : c.role === "AI Agent"? "assistant" : "user",
          content: c.message,

        })),
        { role: "user", content: message },
      ],
      max_tokens: 110,
    });

    let reply = completion.choices[0].message.content.trim();

    // clean accidental JSON replies
    try {
      const parsed = JSON.parse(reply);
      if (parsed?.answer) reply = parsed.answer;
    } catch {}

    return reply;
  } catch (err) {
    console.error("AI error:", err.response?.data || err.message);
    return "⚠️ Sorry, I’m having trouble responding right now.";
  }
}
