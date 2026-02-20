require("dotenv").config();

const app = require("./src/app")
const connnectDB = require("./src/db/db")

connnectDB()

const PORT = 4000;
 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 });

 