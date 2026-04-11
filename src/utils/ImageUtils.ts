import { getHomeURL } from "./GeneralUtils.ts";
import { AUTHOR_IMAGE_URL, COLLEGE_IMAGE_URL, ROGER_VENEGAS_NAME, ROGER_VENEGAS_PFP } from "../constants/DefaultValueConstants.ts";

export const getCollegeImageURL = (astro: any): string => {
    return getHomeURL(astro) + COLLEGE_IMAGE_URL;
}

export const getDefaultAuthorImageURL = (astro: any): string => {
    return getHomeURL(astro) + AUTHOR_IMAGE_URL;
}

export const getAuthorImage = (astro: any, authorName: string): string => {
    authorName = authorName.toUpperCase();
    if (authorName === ROGER_VENEGAS_NAME) {
        return getHomeURL(astro) + ROGER_VENEGAS_PFP;
    }
    return getDefaultAuthorImageURL(astro);
}