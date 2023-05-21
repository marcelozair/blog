import { Controller, Post, Res, Body, UseGuards, Req } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { PostsService } from './posts.service';
import { Response, Request } from 'express';
import { CreatePost } from './dto/create-post.dto';
import { User } from 'src/db/schemas/user.schema';

@Controller('posts')
export class PostsController {
  @Inject(PostsService)
  private readonly postsService: PostsService;

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Res() res: Response,
    @Body() post: CreatePost,
    @Req() req: Request
  ) {
    const user = req.user as User;

    delete user.password;

    const createdPost = await this.postsService.create({
      ...post,
      user,
    });

    return res.json({ post: createdPost });
  }
}
