import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
// import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

const routes: Routes = [
  {
    path: '/api',
    children: [
      {
        path: '/users',
        // module: UsersModule,
      },
    ],
  },
];
console.log(process.env.HOST);
@Module({
  imports: [
    RouterModule.register(routes),
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      cache: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: 5432,
      database: process.env.POSTGRES_DB,
      username: process.env.USERNAMEDB,
      password: process.env.PASSWORDDB,
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
