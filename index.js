// chalk 
import chalk from 'chalk';

console.log("hello world");
console.log(chalk.red("hello Boolean") );
console.log(chalk.green.underline.bold("hello there") );

// axios
import axios from "axios"

axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then(res => console.log(res.data) )
.catch(error => console.error(`errore: ${error}`))

// dotenv 
import 'dotenv/config';

console.log(`your api key: ${process.env.apiKey}`);

// terminal phrase
const userMessage = process.argv[2];
console.log(chalk.blue(`message: ${userMessage}`));
