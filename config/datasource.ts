import dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config()

const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOSTNAME,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    database: process.env.DATABASE_NAME,
    entities: [ 'src/entities/*.ts' ],
    logging: [ 'error' ],
    synchronize: true
});

export default dataSource;