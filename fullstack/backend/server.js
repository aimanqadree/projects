import express from "express";
import cors from "cors";
const app = express();
// app.use(cors());
// app.get("/api/jokes", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
      category: "science",
    },
    {
      id: 2,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
      category: "science",
    },
    {
      id: 3,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
      category: "science",
    },
    {
      id: 4,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
      category: "science",
    },
    {
      id: 5,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
      category: "science",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server at http:// localhost:${port}`);
});
