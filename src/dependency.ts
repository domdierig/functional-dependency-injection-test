import { WriteToDBInterface } from "./interfaces";

const writeToDBImpl:WriteToDBInterface = (data: string): void => {
    console.log(`Writing to DB: ${data}`);
}

export { writeToDBImpl };