import {Router,Application,Request,Response} from "express"
import {logger} from "../utils/logger"
const tesRouter:Router = Router()

tesRouter.get("/",(req: Request,res: Response)=>{
  logger.info("Succes getConnect tes.ts")
  res.status(200).json({msg:"succes connect"})
})

export default tesRouter