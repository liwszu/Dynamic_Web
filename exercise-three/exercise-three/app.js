const express = require("express");
const app = express();
const port = 3000;

const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");

app.get("/", indexRoute);
app.get("/", aboutRoute);

app.use("/static", express.static("public"));

app.listen(port, () => `Example app listening on port ${port}!`);
