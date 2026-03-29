import { DEFAULT_APPLICATION_NAME } from "../constants/DefaultValueConstants.ts"

export const titleGenerator = (title: string) => {
    return String(title + " | " + DEFAULT_APPLICATION_NAME);
}