port = 3000;
url = `http://localhost:${port}/api/v1`;

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(`${url}/status`);
  expect(response.status).toBe(200);
});
