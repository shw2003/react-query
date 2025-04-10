const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

let users = [
  { id: 1, name: "JOGN" },
  { id: 2, name: "Alice" },
];

// GET all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

//post new user
app.post("/api/users", (req, res) => {
  const { name } = req.body;
  const newUser = { id: Date.now(), name };
  users.push(newUser);
  console.log("✅ New User:", newUser);
  res.status(201).json(newUser);
});

//Delete user
app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
