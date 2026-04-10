import { DEFAULT_POST_DATE } from "../constants/DefaultValueConstants";

export class CustomDate {
    public readonly UNIX_TIME: number = 0;
    public readonly DATE_STRING: string = DEFAULT_POST_DATE;

    constructor(time: number, str: string) {
        this.UNIX_TIME = time;
        this.DATE_STRING = str;
    }
}

export default CustomDate;