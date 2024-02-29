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
import { CreatePostsReq, GetListPosts } from 'src/common/dto/posts.req';
import { logger } from 'src/logger';
import { PostsService } from 'src/service/post.service';
import { JwtAuthGuard, JwtUser } from 'src/common/auth/jwt-auth.guard';
import { Functionals, FunctionalsGuard, } from 'src/common/auth/FunctionalGuard';
import { AuthService } from 'src/service/auth.service';


@Controller('post')
@ApiBearerAuth()
@ApiTags('Post')
export class PostController {
    constructor(
        private postsService: PostsService,
        private authService: AuthService
    ) { }

    @Post('create')
    @UseGuards(JwtAuthGuard, FunctionalsGuard)
    @ApiOperation({ summary: 'Create Post' })
    async protectedRoute(@JwtUser() user, @Body() body: CreatePostsReq): Promise<any> {
        const userId = user.user_id;
        logger.info(`create post: user_id: ${JSON.stringify(userId)}, time: ${new Date}`);
        await this.authService.Profile(userId); //Check Profile
        const res = await this.postsService.CreatePost(userId, body);
        return res;
    }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'Get Post List' })
    async GetAll(@Query() model: GetListPosts): Promise<any> {
        model.Validation();
        logger.info(`get list post`);
        return await this.postsService.GetListPost(model);
    }
}
