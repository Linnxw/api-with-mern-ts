import productModel from "../models/product.models"
import {productType} from "../types/product.type"
export const getProduct=async()=>{
  return await productModel.find()
}

export const createProduct = async(payload :productType)=>{
  return await productModel.create(payload)
}

export const getProductById = async(id: String)=>{
  return await productModel.findOne({productId:id})
}

export const updateProduct = async(id: String,payload: productType)=>{
  return await productModel.findOneAndUpdate({productId:id},{$set:payload})
}

export const deleteProduct = async(id: String)=>{
  return await productModel.findOneAndDelete({productId:id})
}