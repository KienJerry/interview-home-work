import {
    Controller,
    Get,
    Query,
    UseGuards,
    UsePipes,
    ValidationPipe,
    Post,
    Body,
    Param,
    Req,
    Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CreateCommentReq, GetListPosts } from 'src/common/dto/comment.req';
import { logger } from 'src/logger';
import { CommentsService } from 'src/service/comment.service';
import { JwtAuthGuard, JwtUser } from 'src/common/auth/jwt-auth.guard';
import { Functionals, FunctionalsGuard, } from 'src/common/auth/FunctionalGuard';
import { AuthService } from 'src/service/auth.service';
import { PostsService } from 'src/service/post.service';


@Controller('comment')
@ApiBearerAuth()
@ApiTags('Comment')
export class CommentController {
    constructor(
        private commentService: CommentsService,
        private authService: AuthService,
        private postsService: PostsService,
    ) { }

    @Post('create')
    @UseGuards(JwtAuthGuard, FunctionalsGuard)
    @ApiOperation({ summary: 'Create Comment' })
    async protectedRoute(@JwtUser() user, @Body() body: CreateCommentReq): Promise<any> {
        const userId = user.user_id;
        logger.info(`create comment: user_id: ${JSON.stringify(userId)}, post: ${body.postId}`);
        await this.authService.Profile(userId); //Check Profile
        await this.postsService.GetPostById(body.postId); //Check Post
        const res = await this.commentService.CreateComment(userId, body);
        return res;
    }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'Get Comment List By Id' })
    async GetAll(@Query() model: GetListPosts): Promise<any> {
        logger.info(`get list comment by postID : ${model.postId}`);
        return await this.commentService.GetListCommentByPostId(model);
    }
}
