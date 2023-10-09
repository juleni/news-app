import NewsList from "@/app/NewsList";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);
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
