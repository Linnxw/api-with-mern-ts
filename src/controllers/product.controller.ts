import {Request,Response} from "express"
import {productValidation,updateValidation} from "../validations/product.validation"
import {logger} from "../utils/logger"
import {getProduct,createProduct,updateProduct,getProductById,deleteProduct} from "../services/product.service"
import {v4 as uuidv4} from "uuid"

export const getProducts=async(req: Request,res: Response)=>{
  const id :any = req.params.id
  try{
    
    if(id){
     const product = await getProductById(id)
      if(!product){
        logger.info("Can't find product,404")
        return res.status(404).json({status:false,statusCode:404,message:"product not found"})
      }
    logger.info("succes get product")
    return res.status(200).json({status:true,statusCode:200,data:product})
    }else{
      const product = await getProduct()
      logger.info("succes get product")
      return res.status(200).json({status:true,statusCode:200,data:product})
    }
  } catch(err){
    logger.error(`ERR:Get product ${err}`)
  }
}

export const saveProduct=async(req:Request,res:Response)=>{
  req.body.productId = uuidv4()
  try{
  const {error,value} = productValidation(req.body)
  if(error){
    logger.error(`ERR Validate : ${error.details[0].message}`)
    return res.status(400)
    .json({status:false,statusCode:400,message:error.details[0].message,data:[]})
  }
  const product:any = await createProduct(value)
  logger.info("succes save data")
  res.status(200).json({status:true,statusCode:200,message:"succes save data",data:product})
  }catch(err){
    logger.error("error save product",err)
    return res.status(500).json({status:false,statusCode:500,message:err,data:[]})
  }
}

export const updateProducts = async(req: Request,res:Response)=>{
  const id: String = req.params.id
  try{
    const {error,value} = updateValidation(req.body)
    if(error){
      logger.error(`ERROR Validate Update product,${error}`)
      return res.status(400).json({status:false,statusCode:400,message:error})
    }
    const product: any = await updateProduct(id,req.body)
    if(!product){
     logger.info("Can't find product,404")
     return res.status(404).json({status:false,statusCode:404,message:"product not found"})
    }
    logger.info("Succes update product")
    res.status(200).json({status:true,statusCode:200,message:"Succes update data",data:value})
  }catch(err){
    logger.error(err)
    res.status(500).json({status:false,statusCode:500,message:err})
  }
}

export const deleteProducts=async(req:Request,res:Response)=>{
  try{
    const product = await deleteProduct(req.params.id)
    if(!product){
     logger.info("Can't find product,404")
     return res.status(404).json({status:false,statusCode:404,message:"product not found"})
    }
    logger.info("Succes delete product")
    res.status(200).json({status:true,statusCode:200,message:"Succes delete data"})
  }catch(err){
    logger.error(err)
    res.status(500).json({status:false,statusCode:500,message:err})
  }
}