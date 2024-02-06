const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.use(express.json());

function sum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = sum(n);
  res.send("Hi your answer is " + ans);
});

app.post("/conversations", function (req, res) {
  console.log(JSON.stringify(req.body));
  res.send("I am in conversation");
});

app.listen(port);
