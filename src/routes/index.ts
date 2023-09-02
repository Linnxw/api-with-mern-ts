import tesRouter from "./tes"
import authRouter from "./authRouter"
import productRouter from "./productRouter"
import {Application,Router} from "express"

const _route: Array<[string,Router]>=[
  ["/tes",tesRouter],
  ["/product",productRouter],
  ["/auth",authRouter]
  ]
  
export const routes=(app: Application):void=>{
  _route.forEach(route=>{
    const [url,router]=route
    app.use(url,router)
  })
}