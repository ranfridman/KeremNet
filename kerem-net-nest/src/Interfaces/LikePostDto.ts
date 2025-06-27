/* eslint-disable prettier/prettier */
export class LikePostDto {
  userId: string;
  postId: string;
}

export class CommentPostDto {
  userId: string;
  userName: string;
  commentContent: string;
  postId: string;
}