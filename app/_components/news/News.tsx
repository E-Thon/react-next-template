"use client";

import { useState } from "react";
import NewsArticle from "./NewsArticle";
import { Article } from "./newsApi";

interface NewsCategory {
  id: string;
  title: string;
  className: string;
}

interface NewsProps {
  articlesByCategory: Record<string, Article[]>;
}

const newsCategories: NewsCategory[] = [
  { id: "world", title: "world", className: "europe" },
  { id: "health", title: "health", className: "health" },
  { id: "arts", title: "arts", className: "arts" },
  { id: "business", title: "business", className: "business" },
  { id: "travel", title: "travel", className: "travel" },
];

export default function News({ articlesByCategory }: NewsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ul className="news">
      {newsCategories.map((category) => (
        <li key={category.id}>
          <div
            className="news__box"
            onClick={() => toggleExpand(category.id)}
            role="button"
            tabIndex={0}
          >
            <img src="/newsify_logo.png" alt="Newsify logo" />
            <h2>{category.title}</h2>
            <div className="news__div">
              <i className="fa-solid fa-chevron-right chevron"></i>
            </div>
          </div>
          <ul
            className={`news__articles ${category.className} ${
              expandedId === category.id ? "animate" : ""
            }`}
            style={{
              display: expandedId === category.id ? "block" : "none",
            }}
          >
            <NewsArticle articles={articlesByCategory[category.title] || []} />
          </ul>
        </li>
      ))}
    </ul>
  );
}