import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

export default async function Home() {
  // Fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));
  console.log(news);
  return (
    <main>
      <div>HomePage</div>
    </main>
  );
}
