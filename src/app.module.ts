import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { OperationModule } from './operation/operation.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    OperationModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
