const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const todoRouter = require("./routes/nft");
const app = express();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/nft", todoRouter);
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port : ${port} 🦉`);
});
