import responseMock from "@/response.json";
import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const isFetchUsed: boolean = process.env.USE_FETCH?.toLowerCase() === "true";

  if (!isFetchUsed) {
    console.log("LOADING MOCK DATA for category:", category, keywords);
    return responseMock;
  } else {
    // GraphQL query
    // "8b0518239be28c1d235d746d64aa9d10"
    const query = gql`
      query ipApi_stepzen_request(
        $access_key: String!
        $categories: String!
        $keywords: String
      ) {
        ipApi_stepzen_request {
          clientIp
        }
        myQuery(
          access_key: $access_key
          categories: $categories
          countries: ""
          sort: "published_desc"
          keywords: $keywords
        ) {
          data {
            author
            category
            country
            image
            description
            language
            published_at
            source
            title
            url
          }
          pagination {
            count
            limit
            offset
            total
          }
        }
      }
    `;
    // Fetch function with Nextjs 13 caching
    const res = await fetch(
      "https://castelvetrodimodena.stepzen.net/api/getting-started/__graphql",
      {
        method: "POST",
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
          query,
          variables: {
            access_key: process.env.MEDIASTACK_API_KEY,
            categories: category,
            keywords: keywords,
          },
        }),
      }
    );

    console.log("LOADING NEW DATA FROM API for category:", category, keywords);

    const newsResponse = await res.json();
    // Sort function by images vs not images present
    const news = sortNewsByImage(newsResponse.data.myQuery);
    return news;
  }
};

export default fetchNews;
