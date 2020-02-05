import { Module } from '@nestjs/common';
import { databaseProviders } from '../database/database.providers';
import { LojaService } from './service/loja.service';
import { ClienteService } from './service/cliente.service';
import { LojaController } from './controller/loja.controller';
import { ClienteController } from './controller/cliente.controller';
import { LojaProviders } from './service/providers/loja.providers';
import { ClienteProviders } from './service/providers/cliente.providers';



@Module({
  imports: [],
  providers: [...databaseProviders, ...LojaProviders, ...ClienteProviders, LojaService, ClienteService],
  controllers: [LojaController, ClienteController],
})
export class EspmModule {}