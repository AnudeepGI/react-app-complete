import ErrorBoundary from "./ErrorBoundary";
import Router from "./Router";

function App() {
  return (
    <ErrorBoundary>
      <Router/>
    </ErrorBoundary>
  );
}

export default App;
