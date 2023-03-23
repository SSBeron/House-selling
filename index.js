const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

const indexRouter = require("./routes/indexRouter");
const apiRouter = require("./routes/apiRouter");

app.use("/", indexRouter);
app.use("/api", apiRouter);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
