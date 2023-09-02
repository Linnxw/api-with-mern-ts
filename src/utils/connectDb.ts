import config from "../config/enviremoent";
import mongoose from "mongoose";
import {logger} from "./logger"
mongoose.connect(`${config.db}`)
.then(conect=>{
  logger.info("Mongoo connected")
})
.catch(err=>{
  logger.error(err)
})

