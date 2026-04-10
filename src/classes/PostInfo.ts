import { DEFAULT_LINK, DEFAULT_POST_AUTHOR, DEFAULT_POST_DATE, DEFAULT_POST_DESCRIPTION, DEFAULT_POST_IMAGE, DEFAULT_POST_IMAGE_ALT, DEFAULT_POST_TITLE } from "../constants/DefaultValueConstants.ts";
import { validateDate, validateURL, validateString, validateAuthor } from "../utils/PostUtils.ts";

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
        this._author = validateAuthor(author);
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