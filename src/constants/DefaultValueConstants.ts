import { USE_CHILEAN_LOCALE, USE_LONG_DATE_FORM } from "./Options.ts";

export const DEFAULT_APPLICATION_NAME : string = "daisyUI";
export const DEFAULT_SLOGAN : string = "Providing reliable tech since 1992";
export const DEFAULT_LINK : string = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
export const HOME_DIRECTORY : string = "/";
export const DEFAULT_TITLE : string = "Hello there";
export const DEFAULT_DESCRIPTION : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
export const DEFAULT_BUTTON_LABEL : string = "Get Started";
export const DEFAULT_IMAGE_LINK : string = "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp";
export const DEFAULT_ICON_NAME : string = "mdi:block";

export const DEFAULT_POST_TITLE : string = "Default Title";
export const DEFAULT_POST_DATE : string = "1970-01-01";
export const DEFAULT_POST_AUTHOR : string = "Default Author";
export const DEFAULT_POST_IMAGE : string = DEFAULT_IMAGE_LINK;
export const DEFAULT_POST_IMAGE_ALT : string = "Default Image";
export const DEFAULT_POST_DESCRIPTION : string = "Default Description";

export const CHILEAN_LOCALE : string = "es-CL";
export const USA_LOCALE : string = "en-US";
export const CHILEAN_TIMEZONE : string = "America/Santiago";
export const STANDARD_TIMEZONE : string = "UTC";

export const FULL_DATE_FORM : "full" = "full";
export const SHORT_DATE_FORM : "short" = "short";

export const DEFAULT_DATE_FORM : "full" | "short" = USE_LONG_DATE_FORM ? FULL_DATE_FORM : SHORT_DATE_FORM;

export const DEFAULT_LOCALE : string = USE_CHILEAN_LOCALE ? CHILEAN_LOCALE : USA_LOCALE;
export const DEFAULT_TIMEZONE : string = USE_CHILEAN_LOCALE ? CHILEAN_TIMEZONE : STANDARD_TIMEZONE;

export const TODAY : number = new Date().getTime();