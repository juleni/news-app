import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";

export default async function Home() {
  const news: NewsResponse = await fetchNews(categories.join(","));
  // Show loading text for short time
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return <NewsList news={news} />;
}
