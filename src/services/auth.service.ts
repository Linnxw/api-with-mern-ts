import userModel from "../models/user.models"
import {UserType} from "../types/auth.type"

export const _createUser = async(payload: UserType)=>{
  return await userModel.create(payload)
}

export const _getUser = async()=>{
  return await userModel.find()
}

export const _findByEmail = async (email: string) =>{
  return await userModel.findOne({email})
}

export const _deleteUser = async (id: string) =>{
  return await userModel.findOneAndDelete({userId:id})
}