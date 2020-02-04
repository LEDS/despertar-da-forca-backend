import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'espm_database',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'rajje.db.elephantsql.com',
      port: 5432,
      username: 'plsxcjly',
      password: 'qs-zVfhAUmvT2bvDJgg9iS_MiPJQeDb0',
      database: 'plsxcjly',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];