import chalk from "chalk";
import moment from "moment";

export const warn = async (data: String) => {
    const time = moment().format("HH:mm:ss")
    console.log(`${time}: ${chalk.yellowBright(data)}`)
}