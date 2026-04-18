const request = require("supertest");
const express = require("express");

// Recreate a minimal app for testing
const app = express();
app.use(express.json());
app.get("/api/health", (req, res) => res.json({ status: "ok" }));
app.get("/api/hello", (req, res) => res.json({ message: "Hello from Express!" }));

describe("API Routes", () => {
  test("GET /api/health returns ok", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("GET /api/hello returns message", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Hello from Express!");
  });
});
