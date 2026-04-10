import { USE_CHILEAN_LOCALE, USE_LONG_DATE_FORM } from "./Options.ts";
import { getYear } from "../utils/GetYear.ts";

// export const DEFAULT_APPLICATION_NAME : string = "daisyUI";
export const DEFAULT_APPLICATION_NAME : string = "Proyecto SCM";
export const DEFAULT_SLOGAN : string = "Providing reliable tech since 1992";
export const DEFAULT_LINK : string = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
export const HOME_DIRECTORY : string = "/";
export const DEFAULT_TITLE : string = "Bienvenido a nuestro blog de tecnologia";
export const DEFAULT_DESCRIPTION : string = "Compartimos noticias, guias y recomendaciones de videojuegos y desarrollo web.";
export const DEFAULT_BUTTON_LABEL : string = "Ver publicaciones";
export const DEFAULT_IMAGE_LINK : string = "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp";
export const GITHUB_LINK: string = "https://github.com/rogandven/projectwebsite";

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

export const TODAY : Date = new Date();
export const CURRENT_YEAR : string = getYear(TODAY);

export const DEFAULT_PARTIAL_URL : string = "";

export const COLOR_PRIMARY: string = "primary";
export const COLOR_SECONDARY: string = "secondary";
export const COLOR_ACCENT: string = "accent";
export const COLOR_INFO: string = "info";
export const COLOR_SUCCESS: string = "success";
export const COLOR_WARNING: string = "warning";
export const COLOR_ERROR: string = "error";
export const COLOR_NEUTRAL: string = "neutral";

export const COLOR_ARRAY: string[] = [COLOR_PRIMARY, COLOR_SECONDARY, COLOR_ACCENT, COLOR_INFO, COLOR_SUCCESS, COLOR_WARNING, COLOR_ERROR, COLOR_NEUTRAL];

export const ICON_PREFIX: string = "mdi:";

export const BLOG_ADDRESS: string = "/blog";

export const FEATURES_ID: string = "features";
export const HOME_ID: string = "home";

export const COLLEGE_IMAGE_URL = "/images/college.jpg";
export const AUTHOR_IMAGE_URL = "/images/blog/default_user.png";

export const ROGER_VENEGAS_NAME = "ROGER VENEGAS";
export const ROGER_VENEGAS_PFP = "/images/blog/roger_venegas.png";