import { TODAY } from "../constants/DefaultValueConstants.ts";
import { parseDate } from "../utils/GeneralUtils.ts";

// https://regex-snippets.com/unix-path
export const RelativeURLRegex: RegExp = /^\/(?:[^\/ ]+\/)*[^\/ ]*$|^\.(?:\/[^\/ ]+)+\/?$|^\.\.\/(?:[^\/ ]+\/)*[^\/ ]*$/;
// https://regex-snippets.com/url-and-path
export const AbsoluteURLRegex: RegExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.?[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

export const validateURL = (URL: string): string => {
    const URLWithoutHashtags = URL.split("#")[0];
    if (AbsoluteURLRegex.test(URLWithoutHashtags)) {
        return URL;
    }
    if (RelativeURLRegex.test(URLWithoutHashtags)) {
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

export const normalizeName = (name: string, isHumanName: boolean): string => {
    let array: string[] = name.split(" ");
    array = array.filter((str: string) => {
        return str.length !== 0;
    });
    array = array.map((str: string, index) => {
        if (!isHumanName) {
            if (str === "PHP") {
                return str.toUpperCase();
            }
            if (index !== 0 && str.length <= 2) {
                return str.toLowerCase();
            }
        }
        return str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase();
    });
    return array.join(" ");    
}

export const validateAuthor = (str: string): string => {
    str = validateString(str, "author");
    return normalizeName(str, true);
}

export const validateCardTitle = (str: string): string => {
    str = validateString(str, "cardTitle");
    return normalizeName(str, false); 
}

export const validateDate = (date: string): string => {
    date = validateString(date, "date");
    const parsedDate: number = Date.parse(date);
    if (isNaN(parsedDate)) {
        throw new SyntaxError(`Invalid date: ${date}`)
    }
    if (parsedDate > TODAY.getTime()) {
        throw new RangeError(`Attempting to post something in the future: ${date}`);
    }
    return parseDate(parsedDate);
}
