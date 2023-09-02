import Joi from "joi";
import {productType} from "../types/product.type"

export const productValidation=(payload :productType)=>{
  const schema = Joi.object({
    productId:Joi.string().required(),
    name:Joi.string().required(),
    price:Joi.number().allow("",null)
  })
  
  return schema.validate(payload)
}

export const updateValidation=(payload :productType)=>{
  const schema = Joi.object({
    name:Joi.string().allow("",null),
    price:Joi.number().allow("",null)
  })
  
  return schema.validate(payload)
}