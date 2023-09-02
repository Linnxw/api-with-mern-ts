import {Request,Response,NextFunction} from "express"

export const requiredUser = (req: Request, res: Response, next: NextFunction)=>{
  const user: any = res.locals.user
  if(!user){
    return res.sendStatus(403)
  }
  next()
}

export const requiredAdmin = (req: Request, res: Response, next: NextFunction) =>{
  const user = res.locals.user
  
  if(!user || user.role !== "admin"){
    return res.sendStatus(403)
  }
 return next()
}