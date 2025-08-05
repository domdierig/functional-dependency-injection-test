
import { WriteToDBInterface } from "./interfaces";

let writeToDB: WriteToDBInterface;

const init = (writeToDBImpl: WriteToDBInterface) => {
    writeToDB = writeToDBImpl;
};

const service = () => {
    writeToDB("Hello, World!");
}

export { init, service };