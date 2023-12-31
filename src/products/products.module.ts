import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from '../entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products])], // 导入并注册实体
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
