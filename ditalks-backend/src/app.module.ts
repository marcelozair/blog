import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { DbModule } from './db/db.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [PostsModule, DbModule, AuthModule, UsersModule],
})
export class AppModule {}
