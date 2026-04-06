import { parseDate } from "../utils/GeneralUtils.ts";

// https://regex-snippets.com/unix-path
export const RelativeURLRegex: RegExp = /^\/(?:[^\/ ]+\/)*[^\/ ]*$|^\.(?:\/[^\/ ]+)+\/?$|^\.\.\/(?:[^\/ ]+\/)*[^\/ ]*$/;
// https://regex-snippets.com/url-and-path
export const AbsoluteURLRegex: RegExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

export const validateURL = (URL: string): string => {
    if (AbsoluteURLRegex.test(URL)) {
        return URL;
    }
    if (RelativeURLRegex.test(URL)) {
        return URL;
    }
    throw new TypeError(`Invalid URL: ${String(URL)}`);
}

export const validateString = (str: string, fieldName: string): string => {
    if (!str) {
        throw new TypeError(`Attempt at passing a null value in field '${fieldName}'`);
    }
    str = str.trim();
    if (str.length <= 0) {
        throw new TypeError(`Empty string not allowed in field '${fieldName}'`);
    }
    return str;
}

export const validateDate = (date: string): string => {
    date = validateString(date, "date");
    const parsedDate: number = Date.parse(date);
    if (isNaN(parsedDate)) {
        throw new SyntaxError(`Invalid date: ${date}`)
    }

    const now: number = Date.now();
    if (parsedDate > now) {
        throw new RangeError(`Attempting to post something in the future: ${date}`);
    }
    return parseDate(parsedDate);
}
