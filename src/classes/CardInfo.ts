import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "../constants/DefaultValueConstants.ts";
import { DEFAULT_ICON_NAME } from "../constants/IconConstants.ts";
import { validateIconName } from "../utils/ButtonUtils.ts";
import { validateCardTitle, validateString } from "../utils/PostUtils.ts";

export class CardInfo {
    private _iconName?: string = DEFAULT_ICON_NAME;
    private _cardTitle?: string = DEFAULT_TITLE;
    private _description?: string = DEFAULT_DESCRIPTION;

    constructor(
        iconName: string = DEFAULT_ICON_NAME, 
        cardTitle: string = DEFAULT_TITLE, 
        description: string = DEFAULT_DESCRIPTION, 
    ) {
        this.iconName = iconName;
        this.cardTitle = cardTitle;
        this.description = description;
    }

    get iconName(): string {
        return String(this._iconName);
    }
    set iconName(iconName: string) {
        this._iconName = validateIconName(iconName);
    }

    get cardTitle(): string {
        return String(this._cardTitle);
    }
    set cardTitle(cardTitle: string) {
        this._cardTitle = validateCardTitle(cardTitle);
    }    

    get description(): string {
        return String(this._description);
    }
    set description(description: string) {
        this._description = validateString(description, "description");
    }     
}

export default CardInfo;