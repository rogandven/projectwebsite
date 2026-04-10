import { DEFAULT_APPLICATION_NAME, DEFAULT_LINK } from "../constants/DefaultValueConstants.ts";
import { DEFAULT_ICON_NAME } from "../constants/IconConstants.ts";
import { validateIconName, validateText } from "../utils/ButtonUtils.ts";
import { validateURL } from "../utils/PostUtils.ts";

export class LinkInfo {
    private _iconName?: string = DEFAULT_ICON_NAME;
    private _destination?: string = DEFAULT_LINK;
    private _text?: string = DEFAULT_APPLICATION_NAME;
    
    constructor(
        iconName: string = DEFAULT_ICON_NAME, 
        destination: string = DEFAULT_LINK, 
        text: string = DEFAULT_APPLICATION_NAME, 
    ) {
        this.iconName = iconName;
        this.destination = destination;
        this.text = text;
    }

    get iconName(): string {
        return String(this._iconName);
    }
    set iconName(iconName: string) {
        this._iconName = validateIconName(iconName);
    } 
    
    get destination(): string {
        return String(this._destination);
    }
    set destination(destination: string) {
        this._destination = validateURL(destination);
    } 

    get text(): string {
        return String(this._text);
    }
    set text(text: string) {
        this._text = validateText(text);
    }
};

export default LinkInfo;