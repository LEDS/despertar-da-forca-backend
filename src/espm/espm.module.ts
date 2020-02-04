import { CacheModule, Module } from '@nestjs/common';
import { databaseProviders } from 'src/database/database.providers';
import { LojaService } from './service/loja.service';
import { ClienteService } from './service/cliente.service';



@Module({
  imports: [],
  providers: [...databaseProviders, LojaService, ClienteService],
  controllers: [],
})
export class LocadoraPessoalModule {}