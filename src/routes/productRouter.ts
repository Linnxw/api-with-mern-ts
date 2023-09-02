import {Router} from "express"
import {requiredUser} from "../middleware/auth"
import {getProducts,saveProduct,deleteProducts,updateProducts} from "../controllers/product.controller"
const productRouter:Router = Router();

productRouter.get("/",getProducts)
productRouter.get("/:id",getProducts)
productRouter.post("/",requiredUser,saveProduct)
productRouter.patch("/:id",requiredUser,updateProducts)
productRouter.delete("/:id",requiredUser,deleteProducts)

export default productRouter