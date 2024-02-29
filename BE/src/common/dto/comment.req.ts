
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { SearchBaseDto } from './common.dto';

export class CreateCommentReq {
    @IsNotEmpty()
    @ApiProperty({ required: true})
    content: string;

    @IsNotEmpty()
    @ApiProperty({ required: true})
    postId: string;
}

export class GetListPosts extends SearchBaseDto {
    @ApiProperty({ required: false })
    @IsOptional()
    postId: string;
  }
