import config from "../config/enviremoent"
import jwt from "jsonwebtoken"
import {logger} from "./logger"
export const jwtSign = (payload:Object,options?:jwt.SignOptions | undefined): any =>{
 return jwt.sign(payload, `${config.jwt_private}`,{
     ...(options && options),
     algorithm:'RS256'
    })
}

export const jwtVerify = (token:string,): any =>{
 try{
   const decoded = jwt.verify(token,config.jwt_public)
   return {
     valid:true,
     expired:false,
     decoded
   }
 }catch(err: any){
   logger.error(`ERROR: jwtverify = ${err}`)
  return {
     valid:false,
     expired:err.message === "jwt is expired or not eligible to use",
     decoded:false
   } 
 }
}

