import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EspmModule } from './espm/espm.module';

@Module({
  imports: [EspmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
