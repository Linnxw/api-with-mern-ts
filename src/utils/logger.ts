import pino from "pino"
import pretty from "pino-pretty"
import moment from "moment"

export const logger=pino({
  base:{
   pid:false
  },
  timeStamp:()=>`,"time":"${moment().format()}"`,
},
  pretty()
)