import { HttpException, HttpStatus, Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ErrorConstant } from 'src/common/constant/error.constant';
import { SuccessResponse } from 'src/common/successResponse';
import { UnitOfWork } from 'src/provider/unitOfWork';
import { SysPostsEntity } from 'src/entity/mysql/posts.entity';
import { SysCommentsEntity } from 'src/entity/mysql/comments.entity';
import { SysUsersEntity } from 'src/entity/mysql/users.entity';
import { logger } from 'src/logger';
import { CreateCommentReq, GetListPosts } from 'src/common/dto/comment.req';

@Injectable()
export class CommentsService {
  constructor(
    private readonly uow: UnitOfWork,
    private readonly jwtService: JwtService,
  ) { }

  async CreateComment(userId: string, body: CreateCommentReq) {
    try {
      const { content, postId } = body;
      let newPost = new SysCommentsEntity();
      newPost.content = content;
      newPost.postId = postId;
      newPost.ownerId = userId;


      const resCreatePost = await this.uow
        .SysCommentsRepo()
        .create(newPost)
        .catch((e) => {
          throw e;
        });

      if (!resCreatePost) {
        logger.debug(`logger create comment debug: ${resCreatePost}`);
        throw new HttpException(
          'UNKNOWN_ERROR',
          HttpStatus.FORBIDDEN,
        );
      }

      return new SuccessResponse(null, 'Create Comment Success', true);
    } catch (error) {
      logger.error(`logger create post error : ${error}`);
    }
  }

  async GetListCommentByPostId(model: GetListPosts): Promise<any> {

    const { postId, limit = 10, page = 1 } = model;

    if (!postId) throw new HttpException(
      "POST_NOT_FOUND",
      HttpStatus.FORBIDDEN,
    );
    const skip = (page - 1) * limit || 0;
    const [data, total] = await this.uow.SysCommentsRepo().createQueryBuilder('comments')
      .leftJoin('comments.ownerUserComment', 'ownerUserComment')
      .addSelect(['ownerUserComment.userName'])
      .where('comments.postsId = :search', { search: `${postId}` })
      .orderBy('comments.created_at', 'DESC')
      .skip(skip)
      .take(limit)
      .getManyAndCount();

    if (total == 0) throw new HttpException(
      "POST_NOT_FOUND",
      HttpStatus.FORBIDDEN,
    );

    const totalPages = Math.ceil(total / limit);

    const result = {
      data,
      total,
      totalPages,
      page,
    }

    return new SuccessResponse(result, 'Search Success', true, 200);
  }
}
