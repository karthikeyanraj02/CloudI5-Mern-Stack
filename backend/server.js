const app = require("./app");
const databaseConnection = require("./config/database");

databaseConnection();

app.listen(process.env.PORT, () => {
  try {
    console.log(
      `server connected sucessfully and connected in ${process.env.PORT}`
    );
  } catch (error) {
    console.log("server is not connected", error);
  }
});
