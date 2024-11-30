import { Article } from "../types";
import { highlightText } from "../utils";

type Props = {
  article: Article;
  searchText: string;
};

export function ArticleCard({ article, searchText }: Props) {
  return (
    <div className="p-3 border border-gray-300 rounded">
      <h2
        className="text-xl font-semibold mb-2"
        dangerouslySetInnerHTML={{
          __html: highlightText(article.title, searchText),
        }}
      />
      <p className="text-black/80 text-sm italic mb-3">{article.date}</p>
      <p
        className="line-clamp-3"
        dangerouslySetInnerHTML={{
          __html: highlightText(article.content, searchText),
        }}
      />
    </div>
  );
}
