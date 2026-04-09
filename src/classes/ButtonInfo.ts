import { DEFAULT_APPLICATION_NAME, DEFAULT_ICON_NAME, DEFAULT_LINK } from "../constants/DefaultValueConstants.ts";
import { DEFAULT_BUTTON_COLOR_ARG } from "../constants/TailwindConstants.ts";
import { validateColor, validateIconName, validateIsPostButton, validateText } from "../utils/ButtonUtils.ts";
import { validateURL } from "../utils/PostUtils.ts";

export class ButtonInfo {
    private _iconName?: string = DEFAULT_ICON_NAME;
    private _destination?: string = DEFAULT_LINK;
    private _color?: string = DEFAULT_BUTTON_COLOR_ARG;
    private _text?: string = DEFAULT_APPLICATION_NAME;
    private _classes?: string = "";
    private _isPostButton?: boolean = false;
    
    constructor(
        iconName: string = DEFAULT_ICON_NAME, 
        destination: string = DEFAULT_LINK, 
        color: string = DEFAULT_BUTTON_COLOR_ARG, 
        text: string = DEFAULT_APPLICATION_NAME, 
        classes: string = "", 
        isPostButton: boolean = false,
    ) {
        this.iconName = iconName;
        this.destination = destination;
        this.color = color;
        this.text = text;
        this.classes = classes;
        this.isPostButton = isPostButton;
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
    
    get color(): string {
        return String(this._color);
    }
    set color(color: string) {
        this._color = validateColor(color);
    } 
    
    get text(): string {
        return String(this._text);
    }
    set text(text: string) {
        this._text = validateText(text);
    }
    
    get classes(): string {
        return String(this._classes);
    }
    set classes(classes: string) {
        this._classes = classes;
    }

    get isPostButton(): boolean {
        return Boolean(this._isPostButton);
    }
    set isPostButton(isPostButton: boolean | string) {
        this._isPostButton = validateIsPostButton(isPostButton);
    }    

};

export default ButtonInfo;