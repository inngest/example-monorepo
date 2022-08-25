const { runBackfillForUser } = require("../../lib/backfill-scripts");

const { event } = JSON.parse(process.argv.pop());

const result = runBackfillForUser(event.data.user_id);

console.log(
  JSON.stringify({
    status: result.ok ? 200 : 500,
    message: `Ran backfill for user ${event.data.user_id}`,
  })
);
