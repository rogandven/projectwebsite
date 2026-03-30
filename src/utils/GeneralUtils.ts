import PostInfo from "../classes/PostInfo.ts";
import { DEFAULT_APPLICATION_NAME, DEFAULT_LOCALE, DEFAULT_TIMEZONE, DEFAULT_DATE_FORM, TODAY } from "../constants/DefaultValueConstants.ts"
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