import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // 连接数据库
      type: 'mysql', // 数据库类型
      host: '112.124.101.127', // 数据库ip地址
      port: 3306, // 端口
      username: 'nest', // 登录名
      password: 'nest', // 密码
      database: 'nest', // 数据库名称
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
      synchronize: true, // 定义数据库表结构与实体类字段同步(这里一旦数据库少了字段就会自动加入,根据需要来使用)
    }),
    ProductsModule, // 加载子模块
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
