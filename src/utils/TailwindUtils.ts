import { COLOR_ACCENT, COLOR_ARRAY, COLOR_ERROR, COLOR_INFO, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_SUCCESS, COLOR_WARNING } from "../constants/DefaultValueConstants.ts";
import { DEFAULT_BUTTON_COLOR, DEFAULT_BUTTON_COLOR_ARG } from "../constants/TailwindConstants.ts";

export const buttonColorParser = (color: string) : string => {
    color = color.toLocaleLowerCase().trim();
    if (color === COLOR_PRIMARY) {
        return "btn-primary";
    } else if (color === COLOR_SECONDARY) {
        return "btn-secondary";
    } else if (color === COLOR_ACCENT) {
        return "btn-accent";
    } else if (color === COLOR_INFO) {
        return "btn-info";
    } else if (color === COLOR_SUCCESS) {
        return "btn-success";
    } else if (color === COLOR_WARNING) {
        return "btn-warning";
    } else if (color === COLOR_ERROR) {
        return "btn-error";
    } else return DEFAULT_BUTTON_COLOR;
}