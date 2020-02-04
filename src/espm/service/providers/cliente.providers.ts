import { Connection } from 'typeorm';
import { Cliente } from '../../entity/cliente.entity';

export const ClienteProviders = [
  {
    provide: 'cliente_database',
    useFactory: (connection: Connection) => connection.getRepository(Cliente),
    inject: ['espm_database'],
  },
];