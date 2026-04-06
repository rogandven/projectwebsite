import { DEFAULT_BUTTON_COLOR, DEFAULT_BUTTON_COLOR_ARG } from "../constants/TailwindConstants";

export const buttonColorParser = (color: string) : string => {
    color = color.toLocaleLowerCase().trim();
    if (!color || color.length <= 0 || color === DEFAULT_BUTTON_COLOR_ARG) {
        return DEFAULT_BUTTON_COLOR;
    } else if (color === "primary") {
        return "btn-primary";
    } else if (color === "secondary") {
        return "btn-secondary";
    } else if (color === "accent") {
        return "btn-accent";
    } else if (color === "info") {
        return "btn-info";
    } else if (color === "success") {
        return "btn-success";
    } else if (color === "warning") {
        return "btn-warning";
    } else if (color === "error") {
        return "btn-error";
    }
    return DEFAULT_BUTTON_COLOR;
}