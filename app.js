import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [health, setHealth]   = useState(null);

  useEffect(() => {
    // Call Express backend
    fetch("/api/hello")
      .then((r) => r.json())
      .then((d) => setMessage(d.message))
      .catch(() => setMessage("Could not reach server"));

    fetch("/api/health")
      .then((r) => r.json())
      .then((d) => setHealth(d.status))
      .catch(() => setHealth("error"));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 Simple Fullstack App</h1>

      <div style={styles.card}>
        <h2>API Response</h2>
        <p style={styles.message}>{message}</p>
      </div>

      <div style={styles.card}>
        <h2>Server Health</h2>
        <span style={{ ...styles.badge, background: health === "ok" ? "#22c55e" : "#ef4444" }}>
          {health ?? "checking..."}
        </span>
      </div>

      <p style={styles.footer}>
        Deployed via GitHub Actions → AWS 🎉
      </p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    maxWidth: 500,
    margin: "60px auto",
    textAlign: "center",
    padding: "0 20px",
  },
  title: { fontSize: 28, marginBottom: 32 },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: "24px",
    marginBottom: 16,
    background: "#f9fafb",
  },
  message: { fontSize: 18, color: "#374151" },
  badge: {
    display: "inline-block",
    color: "white",
    padding: "6px 18px",
    borderRadius: 99,
    fontWeight: "bold",
  },
  footer: { marginTop: 32, color: "#9ca3af", fontSize: 13 },
};

export default App;
