import express,{Application,Request,Response,NextFunction} from "express";
import bodyParser from "body-parser";
import {logger} from "./utils/logger";
import {routes} from "./routes";
import {deserealizeToken} from "./middleware/deserealizeToken"
import config from "./config/enviremoent"
import "dotenv/config"
import "./utils/connectDb"
import cors from "cors"

const app: Application = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//konfigurasi header
app.use((req: Request,res: Response,next: NextFunction)=>{
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Methods','*')
  res.setHeader('Access-Control-Allow-Headers','*')
  next()
})

app.use(deserealizeToken)

routes(app);

app.listen(port,()=>{
   logger.info("server runing in port "+port);
});