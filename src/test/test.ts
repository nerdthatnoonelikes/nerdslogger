import {logger} from "../../dist/index"

const log = new logger("name", false)

log.info("hello")
log.warn("hello")
log.error("hello")