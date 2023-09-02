import {_createUser,_getUser,_findByEmail,_deleteUser} from "../services/auth.service"
import {Request,Response} from "express"
import {logger} from "../utils/logger"
import {v4 as uuidv4} from "uuid"
import {jwtSign} from "../utils/jwt"
import {UserType} from "../types/auth.type"
import passwordHash from "password-hash"
import {authValidate,sessionValidate} from "../validations/auth.validation"
export const createUser = async (req: Request,res: Response) =>{
  req.body.userId = uuidv4()
  const {error,value} = authValidate(req.body)
  if(error){
    logger.error(`ERROR: user - create - validate= ${error}`)
    return res.status(400).json({status:false,statusCode:400,message:error.details[0].message
    })
  }
  try{
    value.password = passwordHash.generate(value.password)
    await _createUser(value)
    logger.info("Succes create user")
    res.status(200).json({status:true,statusCode:200,message:"Succes create user",data:value})
  }catch(error:any){
    logger.error(`ERROR: user - create - create= ${error.message}`)
    res.status(500).json({status:false,statusCode:500,message:error.message})
  }
}

export const getUser = async (req:Request,res: Response)=>{
  try{
    const user: Array<UserType> = await _getUser()
    logger.info("Succes get user")
    res.status(200).json({status:true,statusCode:200,message:"Succes get user",data:user})
  }catch(err){
    logger.error("ERROR:user - get ",err)
  }
}

export const createSession = async (req: Request,res:Response) =>{
  const {error,value} = sessionValidate(req.body)
  if(error){
    logger.error(`ERROR:user - session = ${error.details[0].message}`)
    return res.status(400).json({status:false,statusCode:400,message:error.details[0].message})
  }
  try{
    const user: any = await _findByEmail(value.email)
    const match = passwordHash.verify(value.password,user.password)
    if(!match){
      return res.status(400).json({status:false,statusCode:401,message:"Invalid email or password"})
    }
    const jwt = jwtSign({id:user.userId,name:user.name,email:user.email,role:user.role},{expiresIn:'1d'})
    return res.status(200).json({status:true,statusCode:200,data:jwt})
  }catch(error: any){
    logger.error(`ERROR: user - session = ${error.message}`)
    res.status(500).json({status:false,statusCode:500,message:error.message})
  }
}

export const deleteUser = async (req:Request, res: Response)=>{
  try{
    await _deleteUser(req.params.id)
    logger.info(`SUCCES user - delete`)
    return res.status(200).json({status:true,statusCode:200,message:"Succes delete user"})
  }catch(err: any){
    logger.error(`ERROR: user - delete = ${err}`)
    res.status(500).json({status:false,statusCode:500,message:err.message})
  }
}