
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AuthLoginReq {
    @IsNotEmpty()
    @ApiProperty()
    userName: string;

    @IsNotEmpty()
    @ApiProperty()
    passWord: string;
}

export class AuthRegisterReq {
    @IsNotEmpty()
    @ApiProperty()
    userName: string;

    @IsNotEmpty()
    @ApiProperty()
    passWord: string;

    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @ApiProperty()
    dob: string;
}