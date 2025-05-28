import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://900b41a882827a5262e79af4f8fbb9e3@o4508461979402240.ingest.de.sentry.io/4509399865950288",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});