'use client';

import "./_Loading.scss";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading__spinner"></div>
      <p>Loading...</p>
    </div>
  );
}
