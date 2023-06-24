import { ApiProperty } from '@nestjs/swagger';

export class createProductsDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  id: string;
}
