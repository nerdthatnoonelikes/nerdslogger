import chalk from "chalk";
import moment from "moment";

export class Logger {
    public name: string
    public highlight: boolean
    public constructor(name: string, highlight: boolean) {
        this.name = name
        this.highlight = highlight

    }

    public warn = async (data: string) => {
        if (!data) throw new Error("Please provide something to log")

        if (this.highlight === true) {
            const time = moment().format("HH:mm:ss")
            console.log(chalk.bgYellow(`[${this.name}]: ${time} | ${data}`))
        } else {
            const time = moment().format("HH:mm:ss")
            console.log(chalk.yellowBright(`[${this.name}]: ${time} | ${data}`))
        }

    }

    public error = async (data: string) => {
        if (!data) throw new Error("Please provide something to log")

        if (this.highlight === true) {
            const time = moment().format("HH:mm:ss")
            console.log(chalk.bgRed(`[${this.name}]: ${time} | ${data}`))
        } else {
            const time = moment().format("HH:mm:ss")
            console.log(chalk.red(`[${this.name}]: ${time} | ${data}`))
        }
    }

    public info = async (data: string) => {
        if (!data) throw new Error("Please provide something to log")

        if (this.highlight === true) {
            const time = moment().format("HH:mm:ss")
            console.log(chalk.bgBlue(`[${this.name}]: ${time} | ${data}`))
        } else {
            const time = moment().format("HH:mm:ss")
            console.log(chalk.blue(`[${this.name}]: ${time} | ${data}`))
        }
    }
}