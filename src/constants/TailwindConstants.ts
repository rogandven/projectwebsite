export const IS_HERO_DYNAMIC : boolean = false;
export const IS_NAVBAR_DYNAMIC : boolean = true;
export const CUSTOM_HEADER_COLOR : boolean = true;

export const DEFAULT_MARGIN : string = "m-2";
export const DEFAULT_TOPMARGIN : string = "mt-2";
export const DEFAULT_BOTTOMMARGIN : string = "mb-2";
export const DEFAULT_SIDEMARGIN : string = " ml-2 ";
export const DEFAULT_HALFSIDEMARGIN : string = " ml-1 ";
export const DEFAULT_HEROBUTTONMARGIN : string = " ml-0.5 mr-0.5 mb-2 "

export const HERO_CLASS : string = IS_HERO_DYNAMIC ? "min-h-screen" : "h-100";
export const NAVBAR_LEFTSIDE_CLASS : string = IS_NAVBAR_DYNAMIC ? "flex flex-1 flex-wrap justify-start" : "flex-1";
export const NAVBAR_RIGHTSIDE_CLASS : string = IS_NAVBAR_DYNAMIC ? "flex flex-wrap justify-end" : "flex-none";
export const NAVBAR_LIST_EXTRACLASSES : string = IS_NAVBAR_DYNAMIC ? "flex flex-wrap justify-end" : "";

export const HEADER_FOOTER_CLASS : string = CUSTOM_HEADER_COLOR ? "bg-primary text-neutral-content" : "bg-base-200";

export const MIDDLE_ALIGNER : string = "flex flex-row items-center align-middle";
// export const DARKER_TEXT : string = "text-xs mr-1 uppercase font-semibold opacity-60";
export const DARKER_TEXT : string = "text-xs mr-1 uppercase font-semibold text-secondary";
export const DARKER_TEXT_FOOTER : string = "opacity-100";

export const MAX_PREVIEW_LENGTH : number = 40;

export const DEFAULT_BUTTON_COLOR = "btn-neutral";
export const DEFAULT_BUTTON_COLOR_ARG = "neutral";

export const HERO_TITLE_CLASS : string = "text-5xl font-bold";
export const HERO_TEXT_CLASS : string = "hero-content text-center";