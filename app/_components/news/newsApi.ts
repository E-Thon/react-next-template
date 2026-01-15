export interface Article {
    url: string;
    title: string;
    abstract: string;
    multimedia?: Array<{
        url: string;
        type: string;
        format: string;
    }>;
}

const NYT_API_KEY = process.env.NEXT_PUBLIC_NYT_API_KEY;

export async function fetchArticles(section: string): Promise<Article[]> {
    // error if API key is missing
    if (!NYT_API_KEY) {
        throw new Error("NYT API key is missing");
    }

    const url = new URL(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json`
    );
    url.searchParams.append("api-key", NYT_API_KEY);

    const res = await fetch(url.toString(), {
        next: { revalidate: 900 }, // 15 minutes ISR
    });

    // error if no response
    if (!res.ok) {
        throw new Error(`Failed to fetch articles: ${res.status}`);
    }

    const data = await res.json();
    return data.results?.slice(0, 5) || []; // return top 5 articles
}
