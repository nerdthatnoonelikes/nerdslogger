import chalk from "chalk";
import moment from "moment";

export const error = async (data: String) => {
    const time = moment().format("HH:mm:ss")
    console.log(`[${time}] ${chalk.redBright(data)}`)
}