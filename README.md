# Example: Monorepo

This example repo serves as a companion to the Inngest guide: [Trigger your code from Retool](https://inngest.com/docs/guides/trigger-your-code-from-retool). This is a basic example that shows you how you can:

1. Re-use existing code with an Inngest function in a monorepo
2. Use a custom Dockerfile with your Inngest function.
3. Handle a `retool/backfill.requested` event with your code

## How it works

- All of your code application logic is contained in a root directory (`/lib`)
- All [Inngest functions](https://www.inngest.com/docs/functions/introduction) are in individual directories within the `/function` dir
- Dockerfiles are all in the project root so the Inngest CLI can access the context of files in `/lib` and within `/functions`
- Each Inngest function's `inngest.json` file ([docs](https://www.inngest.com/docs/functions/inngest-json-configuration)) defines the event(s) handled by the function and the path to the custom Dockerfile (see `runtime.dockerfile` in `functions/backfill-user-data/inngest.json`)
- Each Inngest function's contents are a basic script that parses the args, runs some shared code from `/lib` and prints the output as JSON (e.g. `functions/backfill-user-data/index.js`)

This is basic example to show you how you could structure this, but there are several different ways that you could accomplish the same thing.

## Questions?

Join [our Community in Discord](https://www.inngest.com/discord) and drop us a line!
