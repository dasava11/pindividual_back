const server = require("./src/app.js");
const { fillDbTempers } = require("./src/controllers/temperamentController.js");
const { conn } = require("./src/db.js");
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  fillDbTempers();
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
