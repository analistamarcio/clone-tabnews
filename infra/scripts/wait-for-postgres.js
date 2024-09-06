const { exec } = require("node:child_process");

function checkPostgres() {
  // exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);
  exec("docker exec postgres-dev pg_isready", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    process.stdout.write(
      "\n\n🟢 The Postgres is ready and accepting connections!\n\n",
    );
  }
}

process.stdout.write("\n\n🔴 Waiting for awakening Postgres");
checkPostgres();
