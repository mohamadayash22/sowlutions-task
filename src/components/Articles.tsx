import { Article } from "../types";
import { ArticleCard } from "./ArticleCard";

type Props = {
  articles: Article[];
  searchText: string;
};

export function Articles({ articles, searchText }: Props) {
  return (
    <div className="py-4">
      <p className="mb-4">
        <span className="font-bold">{articles.length} posts</span> were found.
      </p>
      <div className="space-y-5">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} searchText={searchText} />
        ))}
      </div>
    </div>
  );
}
