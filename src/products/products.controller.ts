import {
  Controller,
  Get,
  Post,
  Request,
  Query,
  Body,
  Param,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from '../entities/products.entity';
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { createProductsDto } from 'src/dto/createProductsDto';
@ApiTags('products')
@Controller('products')
export class ProductsController {
  // this.productsService = new ProductsService() 等价于 constructor 方式
  constructor(private productsService: ProductsService) {}

  // 通过数据库查询产品list
  @ApiOperation({ summary: '查询所有' })
  @Get('list')
  getList(): Promise<Products[]> {
    return this.productsService.getList();
  }
  // 通过id查询产品
  @ApiQuery({ name: 'id', required: true })
  @ApiOperation({ summary: '通过id查询产品' })
  @Get('getProductById')
  getProductById(@Query() query): Promise<Products> {
    let id: number = parseInt(query.id);
    return this.productsService.getProductById(id);
  }
  // 增加产品
  @ApiBody({ type: createProductsDto, description: '输入产品信息' })
  @ApiOperation({ summary: '增加产品' })
  @Post('addProduct')
  addProduct(@Body() body): Promise<Products> {
    return this.productsService.addProduct(body);
  }
  // 更新产品
  @ApiBody({ type: createProductsDto, description: '输入产品信息' })
  @ApiOperation({ summary: '更新产品' })
  @Post('updateProduct')
  updateProduct(@Body() body): Promise<string> {
    return this.productsService.updateProduct(body);
  }
  // 删除产品
  @ApiBody({ type: createProductsDto, description: '输入产品信息' })
  @ApiOperation({ summary: '删除产品' })
  @Post('delProduct')
  delProduct(@Body() body): Promise<object> {
    return this.productsService.delProduct(body);
  }
}
