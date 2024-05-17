import "dotenv/config";

const pgParams = ({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
});

export default pgParams;