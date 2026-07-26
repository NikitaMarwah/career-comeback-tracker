
function ChatMessage({ role, text }) {
  return (
    <div
      style={{
        marginBottom: "20px",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: role === "user" ? "#dbeafe" : "#f3f4f6",
      }}
    >
      <strong>
        {role === "user" ? "👤 You" : "🤖 AI"}
      </strong>

      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;