import PostInfo from "../classes/PostInfo.ts";
import { DEFAULT_APPLICATION_NAME, DEFAULT_LINK, DEFAULT_LOCALE, DEFAULT_POST_AUTHOR, DEFAULT_POST_DATE, DEFAULT_POST_DESCRIPTION, DEFAULT_POST_IMAGE, DEFAULT_POST_IMAGE_ALT, DEFAULT_POST_TITLE } from "../constants/DefaultValueConstants.ts"
import { MAX_PREVIEW_LENGTH } from "../constants/TailwindConstants.ts";

export const titleGenerator = (title: string) => {
    return String(title + " | " + DEFAULT_APPLICATION_NAME);
}

export const getPosts = () : any[] => {
    return Object.values(import.meta.glob('../pages/blog/posts/*.md', { eager: true }));
} 

const isPost = (post: any) : boolean => {
    if (!post || typeof(post) !== "object" || Array.isArray(post) || !(post.frontmatter)) {
        return false;
    }
    return true;
}

export const getPostInfo = (post: any): PostInfo => {
    const returnValue = new PostInfo();

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
        return String(description);
    }
    return String(description.substring(0, MAX_PREVIEW_LENGTH) + "...");
}

export const parseDate = (date: number): string => {
    return new Date(date).toLocaleDateString(DEFAULT_LOCALE);
}