import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OperationModule } from './operation/operation.module';

@Module({
  imports: [OperationModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
