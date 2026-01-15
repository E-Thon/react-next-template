'use client';

import Link from "next/link";
import "./_ErrorBoundary.scss";

interface ErrorBoundaryProps {
  error?: Error;
  reset?: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="error-boundary">
      <h1>Something went wrong</h1>
      {error && <p>{error.message}</p>}
      <p>The people responsible for this error has been notified</p>
      <div className="error-boundary__actions">
        {reset && (
          <button onClick={reset} className="btn btn--primary">
            Try Again
          </button>
        )}
        <Link href="/" className="btn btn--secondary">
          Go Home
        </Link>
      </div>
    </div>
  );
}
