import { DEFAULT_LINK, DEFAULT_POST_AUTHOR, DEFAULT_POST_DATE, DEFAULT_POST_DESCRIPTION, DEFAULT_POST_IMAGE, DEFAULT_POST_IMAGE_ALT, DEFAULT_POST_TITLE, TODAY } from "../constants/DefaultValueConstants.ts";
import { parseDate } from "../utils/GeneralUtils.ts";

// https://regex-snippets.com/unix-path
const RelativeURLRegex: RegExp = /^\/(?:[^\/ ]+\/)*[^\/ ]*$|^\.(?:\/[^\/ ]+)+\/?$|^\.\.\/(?:[^\/ ]+\/)*[^\/ ]*$/;
// https://regex-snippets.com/url-and-path
const AbsoluteURLRegex: RegExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

const validateURL = (URL: string): string => {
    if (AbsoluteURLRegex.test(URL)) {
        return URL;
    }
    if (RelativeURLRegex.test(URL)) {
        return URL;
    }
    throw new TypeError(`Invalid URL: ${String(URL)}`);
}

const validateString = (str: string, fieldName: string): string => {
    if (!str) {
        throw new TypeError(`Attempt at passing a null value in field '${fieldName}'`);
    }
    str = str.trim();
    if (str.length <= 0) {
        throw new TypeError(`Empty string not allowed in field '${fieldName}'`);
    }
    return str;
}

const validateDate = (date: string): string => {
    date = validateString(date, "date");
    const parsedDate: number = Date.parse(date);
    if (isNaN(parsedDate)) {
        throw new SyntaxError(`Invalid date: ${date}`)
    }

    // console.log("PARSED DATE: " + parsedDate);
    // console.log("TODAY: " + TODAY.getTime());

    if (parsedDate > TODAY.getTime()) {
        throw new RangeError(`Attempting to post something in the future: ${date}`);
    }
    return parseDate(parsedDate);
}

export class PostInfo {
    private _title: string = DEFAULT_POST_TITLE;
    private _date: string = DEFAULT_POST_DATE;
    private _author: string = DEFAULT_POST_AUTHOR;
    private _image: string = DEFAULT_POST_IMAGE;
    private _image_alt: string = DEFAULT_POST_IMAGE_ALT;
    private _description: string = DEFAULT_POST_DESCRIPTION;
    private _url: string = DEFAULT_LINK;

    constructor(
        title: string = DEFAULT_POST_TITLE, 
        date: string = DEFAULT_POST_DATE, 
        author: string = DEFAULT_POST_AUTHOR, 
        image: string = DEFAULT_POST_IMAGE, 
        imageAltText: string = DEFAULT_POST_IMAGE_ALT, 
        description: string = DEFAULT_POST_DESCRIPTION, 
        url: string = DEFAULT_LINK
    ) {
        this.title = title;
        this.date = date;
        this.author = author;
        this.image = image;
        this.imageAltText = imageAltText;
        this.description = description;
        this.URL = url;
    }

    get title(): string {
        return this._title;
    }
    set title(title: string) {
        this._title = validateString(title, "title");
    }

    get date(): string {
        return this._date;
    }
    set date(date: string) {
        this._date = validateDate(date);
    }    

    get author(): string {
        return this._author;
    }
    set author(author: string) {
        this._author = validateString(author, "author");
    }

    get image(): string {
        return this._image;
    }
    set image(image: string) {
        this._image = validateURL(image);
    }

    get imageAltText(): string {
        return this._image_alt;
    }
    set imageAltText(imageAltText: string) {
        this._image_alt = validateString(imageAltText, "image_alt_text");
    }    

    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this._description = validateString(description, "description");
    }
    
    get URL(): string {
        return this._url;
    }
    set URL(url: string) {
        this._url = validateURL(url);
    }
}

export default PostInfo;