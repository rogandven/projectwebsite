/*
    private _iconName?: string = DEFAULT_ICON_NAME;
    private _destination?: string = DEFAULT_LINK;
    private _color?: string = DEFAULT_BUTTON_COLOR_ARG;
    private _text?: string = DEFAULT_APPLICATION_NAME;
    private _classes?: string = "";
    private _isPostButton?: boolean = false;
*/

import { COLOR_ARRAY, ICON_PREFIX } from "../constants/DefaultValueConstants.ts";

export const validateIconName = (iconName: string): string => {
    iconName = iconName.trim().toLowerCase();
    if (!iconName.startsWith(ICON_PREFIX) || iconName.length < ICON_PREFIX.length) {
        throw new TypeError(`Invalid icon "${iconName}"`);
    }
    return iconName;
}

export const validateColor = (color: string): string => {
    color = color.trim().toLowerCase();
    if (!COLOR_ARRAY.includes(color)) {
        throw new TypeError(`Invalid color "${color}", the available colors are ${COLOR_ARRAY.join(", ")}.`);
    }
    return color;
}

export const validateText = (text: string): string => {
    text = text.trim();
    if (text.length <= 0) {
        throw new TypeError("Button text cannot be empty");
    }
    return text;
}

export const validateIsPostButton = (isPostButton: string | boolean): boolean => {
    if (typeof(isPostButton) === "boolean") {
        return Boolean(isPostButton);
    }
    if (typeof(isPostButton) === "string") {
        isPostButton = isPostButton.toLowerCase().trim();
        if (isPostButton === "true") {
            return true;
        }
    }
    return false;
}