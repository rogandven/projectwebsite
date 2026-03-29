import { DEFAULT_APPLICATION_NAME, DEFAULT_LINK, DEFAULT_POST_AUTHOR, DEFAULT_POST_DATE, DEFAULT_POST_DESCRIPTION, DEFAULT_POST_IMAGE, DEFAULT_POST_IMAGE_ALT, DEFAULT_POST_TITLE } from "../constants/DefaultValueConstants.ts"

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

export const getPostInfo = (post: any) => {
    const returnValue = {
        title: DEFAULT_POST_TITLE,
        date: DEFAULT_POST_DATE,
        author: DEFAULT_POST_AUTHOR,
        image: DEFAULT_POST_IMAGE,
        image_alt: DEFAULT_POST_IMAGE_ALT,
        description: DEFAULT_POST_DESCRIPTION,
        url: DEFAULT_LINK,
    };

    if (!isPost(post)) {
        return returnValue;
    }

    returnValue.title = String(post?.title || post?.frontmatter?.title || returnValue.title);
    returnValue.date = String(post?.date || post?.frontmatter?.date || returnValue.date);
    returnValue.author = String(post?.author || post?.frontmatter?.author || returnValue.author);
    returnValue.image = String(post?.image?.src || post?.frontmatter?.image?.src || returnValue.image);
    returnValue.image_alt = String(post?.image?.alt || post?.frontmatter?.image?.alt || returnValue.image_alt);
    returnValue.description = String(post?.description || post?.frontmatter?.description || returnValue.description);
    returnValue.url = String(post?.url || post?.frontmatter?.url || returnValue.url);

    return returnValue;
}