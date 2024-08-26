const port = 3000;
const url = `http://localhost:${port}/api/v1`;

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(`${url}/status`);
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.openned_connections).toEqual(1);
});
