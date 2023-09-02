import {Request,Response,NextFunction} from "express"
import {jwtVerify} from "../utils/jwt"
export const deserealizeToken = (req: Request,res: Response,next: NextFunction) =>{
  const accesToken: any = req.headers.authorization?.split(" ")[1]
  if(!accesToken){
   return next()
  }
  const {valid,expire,decoded} = jwtVerify(accesToken)
  if(decoded){
     res.locals.user = decoded
     return next()
  }
  next()
}
