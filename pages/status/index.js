import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <DatabaseStatus />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "loading...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("en-CA");
  }

  return <div>Last update: {updatedAtText}</div>;
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let databaseStatusInformation = "Loading...";

  if (!isLoading && data) {
    databaseStatusInformation = (
      <>
        <div>Version: {data.dependencies.database.version}</div>
        <div>
          Openned connections: {data.dependencies.database.max_connections}
        </div>
        <div>
          Max connections: {data.dependencies.database.openned_connections}
        </div>
      </>
    );
  }

  return (
    <>
      <h2>Database</h2>
      <div>{databaseStatusInformation}</div>
    </>
  );
}