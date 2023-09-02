import {requiredUser,requiredAdmin} from "../middleware/auth"
import {createUser,getUser,createSession, deleteUser} from "../controllers/auth.controller"
import {Router} from "express"

const authRouter: Router = Router()

authRouter.post("/",requiredUser,createUser)
authRouter.get("/",getUser)
authRouter.post("/login",createSession)
authRouter.delete("/:id",requiredAdmin,deleteUser)
export default authRouter