import  express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import conectDB from "./mongoDb/conect.js"
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"


dotenv.config()

const app = express();


app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.use(cors());
app.use(express.json({limit:'50mb'}));

app.get('/', async (req,res) =>{
    res.send("hellowsssss1")
})

const startServer = async () =>{
    try {
        conectDB(process.env.MONGODB_URL)
         app.listen(8080,()=>console.log("server is running onnn port 8080"))
    } catch (error) {
        console.log(error)
    }
       
   }

   startServer()