//import { categories } from "@/constants";
//import fetchNews from "@/lib/fetchNews";
import response from "../response.json";
import NewsList from "./NewsList";

export default async function Home() {
  // Fetch the news data
  //  const news: NewsResponse = await fetchNews(categories.join(","));
  const news: NewsResponse = response;

  return <NewsList news={news} />;
}
