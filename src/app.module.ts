import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, ExtendedClass, IntermediateClass } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ExtendedClass, IntermediateClass],
})
export class AppModule {}
