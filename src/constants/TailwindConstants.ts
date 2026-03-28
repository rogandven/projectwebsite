export const IS_HERO_DYNAMIC : boolean = false;
export const IS_NAVBAR_DYNAMIC : boolean = true;
export const CUSTOM_HEADER_COLOR : boolean = true;

export const DEFAULT_MARGIN : string = "m-2";
export const DEFAULT_TOPMARGIN : string = "mt-2";
export const DEFAULT_BOTTOMMARGIN : string = "mb-2";
export const DEFAULT_SIDEMARGIN : string = " ml-2 ";
export const DEFAULT_HALFSIDEMARGIN : string = " ml-1 ";

export const HERO_CLASS : string = IS_HERO_DYNAMIC ? "min-h-screen" : "h-100";
export const NAVBAR_LEFTSIDE_CLASS : string = IS_NAVBAR_DYNAMIC ? "flex flex-1 flex-wrap justify-start" : "flex-1";
export const NAVBAR_RIGHTSIDE_CLASS : string = IS_NAVBAR_DYNAMIC ? "flex flex-wrap justify-end" : "flex-none";
export const NAVBAR_LIST_EXTRACLASSES : string = IS_NAVBAR_DYNAMIC ? "flex flex-wrap justify-end" : "";

export const HEADER_FOOTER_CLASS : string = CUSTOM_HEADER_COLOR ? "bg-neutral text-neutral-content" : "bg-base-100";
