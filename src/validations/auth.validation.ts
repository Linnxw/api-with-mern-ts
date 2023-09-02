import Joi from "joi"
import {UserType,SessionType} from "../types/auth.type"
export const authValidate = (payload: UserType)=>{
  const schema = Joi.object({
    userId:Joi.string().required(),
    name:Joi.string().required(),
    email:Joi.string().required(),
    password:Joi.string().required(),
    role:Joi.string().allow("",null)
  })
  return schema.validate(payload)
}

export const sessionValidate = (payload: SessionType)=>{
  const schema = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required(),
  })
  return schema.validate(payload)
}