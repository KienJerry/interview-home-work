import { HttpException, HttpStatus, Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ErrorConstant } from 'src/common/constant/error.constant';
import { SuccessResponse } from 'src/common/successResponse';
import { UnitOfWork } from 'src/provider/unitOfWork';
import { SysPostsEntity } from 'src/entity/mysql/posts.entity';
import { SysUsersEntity } from 'src/entity/mysql/users.entity';
import { logger } from 'src/logger';
import { CreatePostsReq, GetListPosts } from 'src/common/dto/posts.req';

@Injectable()
export class PostsService {
  constructor(
    private readonly uow: UnitOfWork,
    private readonly jwtService: JwtService,
  ) { }

  async CreatePost(userId: string, body: CreatePostsReq) {
    try {
      const { title, content } = body;
      let newPost = new SysPostsEntity();
      newPost.title = title;
      newPost.content = content;
      newPost.ownerId = userId;


      const resCreatePost = await this.uow
        .SysPostsRepo()
        .create(newPost)
        .catch((e) => {
          throw e;
        });

      if (!resCreatePost) {
        logger.debug(`logger create post debug: ${resCreatePost}`);
        throw new HttpException(
          'UNKNOWN_ERROR',
          HttpStatus.FORBIDDEN,
        );
      }

      return new SuccessResponse(null, 'Create Post Success', true);
    } catch (error) {
      logger.error(`logger create post error : ${error}`);
    }
  }

  async GetListPost(model: GetListPosts): Promise<any> {

    const { search, limit = 10, page = 1 } = model
    const skip = (page - 1) * limit || 0;
    const [data, total] = await this.uow.SysPostsRepo().createQueryBuilder('post')
      .leftJoinAndSelect('post.commentsPost', 'commentsPost')
      .leftJoinAndSelect('commentsPost.ownerUserComment', 'ownerUserComment')
      .leftJoin('post.ownerUserPost', 'ownerUserPost')
      .addSelect(['ownerUserPost.userName'])
      .where(search ? 'post.title LIKE :search' : '1=1', { search: `%${search}%` })
      .orderBy('post.created_at', 'DESC')
      .skip(skip)
      .take(limit)
      .getManyAndCount();

    const modifiedData = data.map(post => ({
      ...post,
      commentsPost: post.commentsPost.length,
      commentsPostItems: post.commentsPost.map(comment => ({
        ...comment,
        ownerUserComment: {
          name: comment.ownerUserComment.name
        }
      })).slice(0, 2),
    }));

    const totalPages = Math.ceil(total / limit);

    const result = {
      data: modifiedData,
      total,
      totalPages,
      page,
    }

    return new SuccessResponse(result, 'Search Success', true, 200);
  }

  async GetPostById(Id: string): Promise<any> {
    let resPost = await this.uow
      .SysPostsRepo()
      .getOne()
      .where((x) => x.id)
      .equal(Id)
      .catch((e) => {
        throw e;
      });

    if (!resPost)
      throw new HttpException(
        "POST_NOT_FOUND",
        HttpStatus.FORBIDDEN,
      );
    return new SuccessResponse(resPost, 'Search Success', true);
  }
}
