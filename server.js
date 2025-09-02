
```js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Amazon affiliate site is live!");
});

app.listen(PORT, () => {
  js
console.log(`Server is running on port ${PORT}`);

