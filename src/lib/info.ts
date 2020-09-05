import chalk from "chalk";
import moment from "moment";

export const info = async (data: String) => {
    const time = moment().format("HH:mm:ss")
    console.log(`${time}: ${chalk.blue(data)}`)
    
}