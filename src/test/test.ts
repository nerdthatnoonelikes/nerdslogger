import {logger} from "../../dist/index"

const log = new logger({
  name: "test",
  highlight: false
})

log.info("hello")
log.warn("hello")
log.error("hello")
