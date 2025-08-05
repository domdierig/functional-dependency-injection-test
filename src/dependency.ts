import { WriteToDBInterface } from "./interfaces";

const writeToDBImpl:WriteToDBInterface = (data: string): void => {
    console.log(`Writing to DB: ${data}`);
}

const logToConsole = (message: string): void => {
    console.log(`Log: ${message}`);
}

const sendMail = (recipient: string, subject: string, body: string): void => {
    console.log(`Sending mail to ${recipient} with subject "${subject}" and body "${body}"`);
}

export { writeToDBImpl, logToConsole, sendMail };