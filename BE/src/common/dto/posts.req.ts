
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { SearchBaseDto } from './common.dto';

export class CreatePostsReq {
    @IsNotEmpty()
    @ApiProperty({ required: true})
    title: string;

    @IsNotEmpty()
    @ApiProperty({ required: true})
    content: string;
}

export class GetListPosts extends SearchBaseDto {
    @ApiProperty({ required: false })
    @IsOptional()
    search: string;
  }
