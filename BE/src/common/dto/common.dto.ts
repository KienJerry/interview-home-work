import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class PaginateReqDto {
    constructor() {
        this.page = 1;
        this.limit = 10;
    }

    public Standardized() {
        this.page = Number(this.page);
        this.limit = Number(this.limit);
    }

    @ApiProperty({ required: false })
    @IsOptional()
    page: number;

    @ApiProperty({ required: false })
    @IsOptional()
    limit: number;
}

export class GetOptionsProperty {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    property: string;
}

export class PaginateResDto<T> {
    @ApiProperty()
    page: number;

    @ApiProperty()
    limit: number;

    @ApiProperty()
    total: number;

    @ApiProperty()
    data: T[];
}

export class SearchBaseDto {
    @ApiProperty({ required: false })
    @IsOptional()
    limit: number;

    @ApiProperty({ required: false })
    @IsOptional()
    page: number;

    public Validation() {
        this.limit = Number(this.limit) || 10
        this.page = Number(this.page) || 1
    }
}

export class CheckFunctionalDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    functional_name: string[]

    @ApiProperty({ required: true })
    @IsNotEmpty()
    user_id: string
}
