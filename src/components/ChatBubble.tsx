import React, { useState, useEffect, useRef } from 'react';
type Message = { role : 'user' | 'bot'; text: string };

export default function ChatBubble() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);
    const messagesRef = useRef<HTMLDivElement | null>(null);
 
    const GEMINI_API_KEY = (import.meta.env.VITE_GEMINI_API_KEY) || '<PUT_YOUR_API_KEY_HERE>';
    const MODEL_NAME = "gemini-2.0-flash";
    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages, open]);
    async function sendMessage() {
    const text = input.trim();
    if (!text) return;
  const newMsg: Message = { role: "user", text };
  setMessages((m) => [...m, newMsg]);
  setInput("");
  setLoading(true);

  // Build a short conversation context (last 8 messages)
  const history = [...messages, newMsg].slice(-8)
    .map(m => (m.role === 'user' ? 'User: ' : 'NS AI: ') + m.text)
    .join('\n');

  const systemPrompt = "You are NS AI, an educational assistant. Provide clear, concise, step-by-step answers and examples when appropriate. You are developed by team NS-Cube. Members are Sakshyam Ghimire, Samir Lamsal, Sujjal Shrestha, Neeraj Thapa. When asked questions, you must answer in the context of Nepal and the NEB (National Examination Board) syllabus. Use simple and clear English so that students do not get confused. Give short but helpful answers, focusing on key points from the course. If the question is theoretical, explain briefly with examples relevant to daily life in Nepal. If the question is mathematical or numerical, show the step-by-step solution clearly. Do not give unnecessary details — only what is useful for a student preparing for NEB exams. Always keep your answers student-friendly, exam-focused, and easy to understand. ";
  const prompt = systemPrompt + "\n\nConversation:\n" + history + "\n\nUser: " + text + "\nNS AI:";

  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ]
  };   
  try {
    const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
      const raw = await response.text();
    let data: any = null;
    try { data = JSON.parse(raw); } catch (e) {  }

    console.groupCollapsed("NS AI — Gemini response");

    console.groupEnd();

    if (!response.ok) {
      const errMessage = (data && (data.error?.message || data.message)) || `HTTP ${response.status}: ${response.statusText}`;
      setMessages(m => [...m, { role: "bot", text: `⚠️ API error: ${errMessage}` }]);
      return;
    }
    const candidateText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||     
      data?.output?.[0]?.content?.text ||                   
      data?.candidates?.[0]?.output?.[0]?.content?.text ||   
      (typeof data === "string" ? data : null);

    if (!candidateText || candidateText.length === 0) {
      const fallback = (data && JSON.stringify(data).slice(0, 1000)) || raw.slice(0, 1000);
      setMessages(m => [...m, { role: "bot", text: "⚠️ No answer returned by API. Raw response (truncated): " + fallback }]);
      return;
    }
    setMessages(m => [...m, { role:"bot", text: candidateText }]);
  } catch (err: any) {

    setMessages(m => [...m, { role: "bot", text: "⚠️ Network or fetch error: " + (err?.message || String(err)) }]);
  } finally {
    setLoading(false);
  }
}

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") sendMessage();
  }
  return (
    <>
      <style>{`

        .nsai-bubble-btn {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
          background: white;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          z-index:1100;
          transition: transform .18s ease;
        }
        .nsai-bubble-btn:hover { transform: translateY(-4px); }
        .nsai-chat-panel {
          position: fixed;
          right: 20px;
          bottom: 98px;
          width: 360px;
          max-width: calc(100% - 40px);
          height: 520px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          background: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index:1100;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }
        .nsai-header {
          background: linear-gradient(90deg,#2f6df6,#6a4ff3);
          color: white;
          padding: 12px 14px;
          display:flex;
          align-items:center;
          gap:10px;
        }
        .nsai-header .title { font-weight:700; font-size:16px; }
        .nsai-header .subtitle { font-size:12px; opacity:0.9; }
        .nsai-messages { flex:1; padding:12px; overflow:auto; background: linear-gradient(#fbfdff,#f7fbff); }
        .nsai-msg { margin:8px 0; padding:10px 12px; border-radius:10px; max-width:85%; line-height:1.45; }
        .nsai-msg.user { margin-left:auto; background:#e8f7ff; color:#013a63; }
        .nsai-msg.bot { margin-right:auto; background:#f1f3ff; color:#0b2754; }
        .nsai-input-area { display:flex; gap:8px; padding:10px; border-top:1px solid #eee; }
        .nsai-input { flex:1; padding:10px 12px; border-radius:8px; border:1px solid #ddd; outline:none; }
        .nsai-send { padding:10px 14px; border-radius:8px; background:linear-gradient(90deg,#2f6df6,#6a4ff3); color:white; border:none; cursor:pointer; }
        .nsai-small { font-size:12px; opacity:0.85; }
      `}</style>

      <div
        className="nsai-bubble-btn"
        role="button"
        aria-label="Open NS AI chat"
        onClick={() => setOpen((o) => !o)}
        title="NS AI - Ask educational questions"
      >
        {}
        <img
          src="/assets/nsai-logo.png"
          alt="NS AI"
          style={{ width: 48, height: 48, borderRadius: 8 }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect rx="32" width="64" height="64" fill="%23357ab8"/><text x="50%" y="55%" font-size="28" fill="white" text-anchor="middle" font-family="Arial">NS</text></svg>';
          }}
        />
      </div>

      {open && (
        <div className="nsai-chat-panel" role="dialog" aria-label="NS AI chat window">
          <div className="nsai-header">
            <img
              src="/assets/nsai-logo.png"
              alt="NS AI"
              style={{ width: 36, height: 36, borderRadius: 8 }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><rect rx="9" width="36" height="36" fill="%23357ab8"/></svg>';
              }}
            />
            <div>
              <div className="title">NS AI</div>
              <div className="subtitle nsai-small">Your study assistant — ask anything educational</div>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
              <button className="nsai-small" onClick={() => { setMessages([]); }} title="Clear conversation">Clear</button>
              <button className="nsai-small" onClick={() => setOpen(false)} title="Close">Close</button>
            </div>
          </div>
          <div className="nsai-messages" ref={messagesRef}>
            {messages.length === 0 && <div className="nsai-small">Hi! I am NS AI — I can help explain concepts, solve problems, and give study tips. Try: <i>Explain photosynthesis in simple terms</i></div>}
            {messages.map((m, idx) => (
              <div key={idx} className={`nsai-msg ${m.role === "user" ? "user" : "bot"}`}>
                {m.role === "user" ? <strong>You</strong> : <strong>NS AI</strong>}
                <div style={{ marginTop: 6 }}>{m.text}</div>
              </div>
            ))}
            {loading && <div className="nsai-msg bot">NS AI is typing…</div>}
          </div>
        <div className="nsai-input-area">
            <input
              className="nsai-input"
              placeholder="Ask an educational question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
            /><button className="nsai-send" onClick={sendMessage} disabled={loading}>
              {loading ? "…" : "Ask"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

