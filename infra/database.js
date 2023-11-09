import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST ?? "nohost",
    port: process.env.POSTGRES_PORT ?? "noport",
    user: process.env.POSTGRES_USER ?? "nouser",
    database: process.env.POSTGRES_DB ?? "noname",
    password: process.env.POSTGRES_PASSWORD ?? "nopass",
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
