import { SetMetadata } from '@nestjs/common';

export const Permission = (...params: string[]) => SetMetadata('policy', params);
