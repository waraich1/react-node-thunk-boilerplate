const app = require("./app");

const port = 8080;

app.listen(port, () => {
  console.log("This application is up running" + port);
});