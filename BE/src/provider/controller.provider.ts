import { AuthController } from 'src/controller/auth.controller';
import { PostController } from 'src/controller/post.controller';
import { CommentController } from 'src/controller/comment.controller';

export const controllerProvider = [
  AuthController,
  PostController,
  CommentController,
];
