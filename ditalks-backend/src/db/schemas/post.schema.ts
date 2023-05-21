import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type PostDocument = HydratedDocument<Post>

@Schema()
export class Post {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  banner: string;

  @Prop()
  likes: number;

  @Prop()
  publicationDate: string;

  @Prop()
  user: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);