const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err);
    process.exit();
  });

require("./routes/tutorial.routes.js")(app);

app.get("/", (req, res) => {
  res.json({ welcome: "Root of AigrieTeam website" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
