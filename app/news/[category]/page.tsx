import NewsList from "@/app/NewsList";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import response from "@/response.json";

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
  // TODO: To apply fetch: rename "news2" variable to "news"
  const news2: NewsResponse = await fetchNews(category);
  // Use mock data from "response.json" file
  const news: NewsResponse = response;
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  // it prebuilds following pages :
  // ./news/business
  // ./news/entertainment
  // ./news/general
  // ./news/health
  // ./news/science
  // ./news/sports
  // ./news/technology
  return categories.map((category) => {
    category: category;
  });
}
