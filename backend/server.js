const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

const db = require("./app/models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./app/routes/turorial.routes")(app);

app.get("/", (req, res) => {
  res.json({ welcome: "Root of AigrieTeam website" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
