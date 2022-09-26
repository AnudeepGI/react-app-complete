import ErrorBoundary from "./ErrorBoundary";
import Router from "./Router";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "", // removed URL for security issues get URL from Sentry website with ****
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function App() {
  return (
    <ErrorBoundary>
      <Router/>
    </ErrorBoundary>
  );
}

export default App;
