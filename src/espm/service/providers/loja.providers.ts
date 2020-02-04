import { Connection } from 'typeorm';
import { Loja } from '../../entity/loja.entity';

export const LojaProviders = [
  {
    provide: 'loja_database',
    useFactory: (connection: Connection) => connection.getRepository(Loja),
    inject: ['espm_database'],
  },
];