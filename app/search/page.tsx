import fetchNews from "@/lib/fetchNews";
import response from "@/response.json";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { term: string };
};

async function SearchPage({ searchParams }: Props) {
  // TODO: To apply fetch: rename "news2" variable to "news"
  const news2: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  // Use mock data from "response.json" file
  const news: NewsResponse = response;
  return (
    <div>
      <h1 className="headerTitle">Search results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
