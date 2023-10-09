import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import response from "@/response.json";
import NewsList from "./NewsList";

export default async function Home() {
  // TODO: To apply fetch: rename "news2" variable to "news"
  const news2: NewsResponse = await fetchNews(categories.join(","));
  // Use mock data from "response.json" file
  const news: NewsResponse = response;

  return <NewsList news={news} />;
}
