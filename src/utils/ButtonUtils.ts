import { COLOR_ARRAY, DEFAULT_BUTTON_PREFIX, ICON_PREFIX } from "../constants/DefaultValueConstants.ts";
import ButtonInfo from "../classes/ButtonInfo.ts";

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

export const removePrefix = (str: string): string => {
    if (str.startsWith(DEFAULT_BUTTON_PREFIX)) {
        const newString = str.substring(DEFAULT_BUTTON_PREFIX.length);
        return newString;
    }
    return str;
}

export const sortButtonInfos = (arr: ButtonInfo[]): ButtonInfo[] => {
    arr.sort((a, b) => {
        const a1: string = removePrefix(a.text);
        const b1: string = removePrefix(b.text);
        return a1.localeCompare(b1);
    })
    return arr;
}

