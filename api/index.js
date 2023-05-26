const server = require("./src/app.js");
const getApiTempers = require("./src/controllers/temperamentController.js");

const { conn } = require("./src/db.js");
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  getApiTempers();
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
