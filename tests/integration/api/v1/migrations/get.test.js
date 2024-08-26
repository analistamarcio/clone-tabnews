import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

const PORT = 3000;
const URL = `http://localhost:${PORT}/api/v1`;

test("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch(`${URL}/migrations`);
  // const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});