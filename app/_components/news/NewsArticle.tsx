"use client";

import { Article } from "./newsApi";

function getImageUrl(article: Article): string {
  return article.multimedia?.[0]?.url || "https://placecats.com/g/100/100";
}

interface NewsArticleProps {
    articles: Article[];
}

export default function NewsArticle({ articles }: NewsArticleProps) {
    return (
        <>
            {articles.map((article) => (
                <li key={article.url} className="news__article">
                    <div className="news__div">
                        <img src={getImageUrl(article)} alt={article.title} />
                        <h3>{article.title}</h3>
                        <p>{article.abstract}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read more <i className="fa-solid fa-angles-right"></i>
                        </a>
                    </div>
                </li>
            ))}
        </>
    );
}
