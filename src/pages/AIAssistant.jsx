console.log("KEY IS: ", import.meta.env.VITE_GEMINI_API_KEY);

import { useState } from "react";
import { askGemini } from "../services/gemini";

function AIAssistant() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {

    if (!prompt.trim()) {
  setResponse("Please enter a question.");
  return;
}

    setLoading(true)

    try {
      console.log("Prompt is:", prompt);
      const result = await askGemini(prompt);
      console.log("Result is: ", result);
      setResponse(result);
    } catch (error){
      console.error("Error:", error);
      setResponse(error.message);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🤖 AI Career Assistant</h1>

      <textarea
        rows="5"
        cols="50"
        placeholder="Ask anything..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleAsk} disabled={loading}>
        {loading ? "thinking..." : "Ask AI"}
        </button>

      <hr />

      <h3>Response:</h3>

      <p>{response}</p>
    </div>
  );
}

export default AIAssistant;
