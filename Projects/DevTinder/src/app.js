const express = require("express");
const app = express();
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express");
});
app.get("/test", (req, res) => {
  res.send("Hello Test");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on PORT :${PORT}`);
});
