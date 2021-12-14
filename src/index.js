const express = require("express");

const routes = require("./routes");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(routes);

app.listen(PORT, () => {
  console.log(`Navigate to http://localhost:${PORT}`);
});
