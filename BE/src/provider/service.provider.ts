import { AuthService } from 'src/service/auth.service';
import { PostsService } from 'src/service/post.service';
import { CommentsService } from 'src/service/comment.service';

export const serviceProvider = [
  AuthService,
  PostsService,
  CommentsService,
];
