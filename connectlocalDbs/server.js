//main file

const app = require("./src/app");
const connectToDatabase = require("./src/db/db");
 
    async function startServer(){
        try{
            await connectToDatabase();
            app.listen(3000, ()=>{
                console.log("server start ");
            })
        } catch(err) {
            console.error("Failed to start server due to DB error.");
        }
    }

    startServer();