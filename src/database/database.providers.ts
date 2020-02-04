import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'espm_database',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'tuffi.db.elephantsql.com',
      port: 5432,
      username: 'btarfqns',
      password: 'nJ1gTFzqBY8zYEzxM69MopIMVwi712l6',
      database: 'btarfqns',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];