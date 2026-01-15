'use client';

import { useState } from "react";
import "./_Searchfield.scss";

export default function Searchfield() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="searchfield">
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="searchfield__input"
      />
      <button type="submit" className="searchfield__button">
        Search
      </button>
    </form>
  );
}