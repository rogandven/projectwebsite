import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import PostInfo from "../classes/PostInfo.ts";
import { DEFAULT_APPLICATION_NAME, DEFAULT_LOCALE, DEFAULT_TIMEZONE, DEFAULT_DATE_FORM, TODAY, DEFAULT_PARTIAL_URL, HOME_DIRECTORY } from "../constants/DefaultValueConstants.ts"
import { INCLUDE_DAY, USE_LONG_DATE_FORM } from "../constants/Options.ts";
import { MAX_PREVIEW_LENGTH } from "../constants/TailwindConstants.ts";

export const titleGenerator = (title: string) => {
    return String(title + " | " + DEFAULT_APPLICATION_NAME);
}

/*
export const getPosts = () : any[] => {
    return Object.values(import.meta.glob('../pages/blog/posts/*.md', { eager: true }));
} 
*/
export const getPosts = () : PostInfo[] => {
    const posts : any[] = Object.values(import.meta.glob('../pages/blog/posts/*.md', { eager: true }));
    const parsedPosts : PostInfo[] = posts.map((post) => {
        return getPostInfo(post);
    });
    return parsedPosts;
}

const isPost = (post: any) : boolean => {
    if (!post || typeof(post) !== "object" || Array.isArray(post) || !(post.frontmatter)) {
        return false;
    }
    return true;
}

export const getPostInfo = (post: any): PostInfo => {
    const returnValue : PostInfo = new PostInfo();

    if (!isPost(post)) {
        return returnValue;
    }

    returnValue.title = String(post?.title || post?.frontmatter?.title || returnValue.title);
    returnValue.date = String(post?.date || post?.frontmatter?.date || returnValue.date);
    returnValue.author = String(post?.author || post?.frontmatter?.author || returnValue.author);
    returnValue.image = String(post?.image?.src || post?.frontmatter?.image?.src || returnValue.image);
    returnValue.imageAltText = String(post?.image?.alt || post?.frontmatter?.image?.alt || returnValue.imageAltText);
    returnValue.description = String(post?.description || post?.frontmatter?.description || returnValue.description);
    returnValue.URL = String(post?.url || post?.frontmatter?.url || returnValue.URL);

    return returnValue;
}

export const descriptionGenerator = (description: string) : string => {
    if (description.length < MAX_PREVIEW_LENGTH) {
        return String(description).trim();
    }
    return String(description.substring(0, MAX_PREVIEW_LENGTH).trim() + "...");
}

export const parseDate = (date: number): string => {
    const dateString = new Date(date).toLocaleDateString(DEFAULT_LOCALE, {
        timeZone: DEFAULT_TIMEZONE,
        dateStyle: DEFAULT_DATE_FORM,
    });

    if (USE_LONG_DATE_FORM && !INCLUDE_DAY) {
        return dateString.split(",")[1].trim();
    }
    return dateString;
}

export const getYear = (date: Date): string => {
    return date.getFullYear().toString();
}

export const isAstro = (astro: any): boolean => {
    if (astro && typeof(astro) === "object" && !Array.isArray(astro) && astro?.url && astro?.routePattern) {
        return true;
    }
    return false;
}

export const objectPrinter = (object: any): string => {
    if (typeof(object) !== "object") {
        return String(object);
    }
    if (!object) {
        return "null";
    }
    try {
        return JSON.stringify(object);
    } catch (error) {
        return String(object);
    }
    return "unknown";
}

export const getCurrentPageURL = (astro: any): string => {
    if (!isAstro(astro)) {
        throw new TypeError(`Expected Astro, ${'"' + objectPrinter(astro) + '"'} given`);
    }
    let returnValue = String(astro.url || DEFAULT_PARTIAL_URL);
    if (returnValue.endsWith("/")) {
        returnValue = returnValue.slice(0, returnValue.length - 1);
    }
    return returnValue;
}

export const getGoBackURL = (astro: any, amount: number): string => {
    const currentUrl: string = getCurrentPageURL(astro);
    amount = Math.abs(Number(amount));
    const parsedCurrentUrl: string[] = currentUrl.split("/");
    for (let i:number = 0; i < amount; i++) {
        // console.log("pop!\n");
        // console.log(parsedCurrentUrl);
        parsedCurrentUrl.pop();
        if (parsedCurrentUrl.length <= 0) {
            return DEFAULT_PARTIAL_URL;
        }
    }
    // console.log(`\nGO BACK URL: ${String(parsedCurrentUrl.join("/") || DEFAULT_PARTIAL_URL)}\n`);
    return parsedCurrentUrl.join("/") || DEFAULT_PARTIAL_URL;
}

export const getHomeURL = (astro: any): string => {
    const currentUrl: string = getCurrentPageURL(astro);
    const currentRoute: string = String(astro?.routePattern || HOME_DIRECTORY);
    if (currentRoute === HOME_DIRECTORY) {
        return currentUrl;
    }
    return currentUrl.replaceAll(currentRoute, "");
}

export const getAbsoluteURL = (astro: any, path: string, isPostURL: boolean = false): string => {
    if (isPostURL || path.startsWith("http")) {
        return path;
    }
    return getHomeURL(astro) + path;
}