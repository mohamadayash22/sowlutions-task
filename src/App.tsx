import { Articles } from "./components/Articles";
import { SearchInput } from "./components/SearchInput";
import allArticles from "../data/articles";
import { useState } from "react";

export default function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const articles = allArticles.filter(
    (article) =>
      article.title
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase()) ||
      article.content
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
  );

  return (
    <div className="container py-4">
      <h2 className="text-3xl font-bold mb-3">Search</h2>
      <SearchInput searchText={searchText} onChange={handleSearchChange} />
      <Articles articles={articles} searchText={searchText} />
    </div>
  );
}
