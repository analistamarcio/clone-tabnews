import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST ?? "nohost",
    port: process.env.POSTGRES_PORT ?? "noport",
    user: process.env.POSTGRES_USER ?? "nouser",
    database: process.env.POSTGRES_DB ?? "noname",
    password: process.env.POSTGRES_PASSWORD ?? "nopass",
    // ssl: process.env.NODE_ENV !== "development",
    ssl: getSSLValues(),
  });

  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
}

function getSSLValues() {
  if (process.env.POSTGRES_CA) {
    return {
      ca: process.env.POSTGRES_CA,
    };
  }

  return process.env.NODE_ENV === "development" ? false : true;
}

export default {
  query: query,
};
