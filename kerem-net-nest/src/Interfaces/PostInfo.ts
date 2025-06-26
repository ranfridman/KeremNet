/* eslint-disable prettier/prettier */
export interface PostInfo {
    id: string,
    userId: string,
    text: string;
    comments: {
        commentContent: string;
        userName: string;
        date: string;
    }[],
    likes: string[];
    creatorName: string;
    date: string;
}