import React from "react";

type Props = {
  searchText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchInput({ searchText, onChange }: Props) {
  return (
    <input
      type="text"
      value={searchText}
      onChange={onChange}
      placeholder="Search articles..."
      className="text-sm border border-gray-300 py-1.5 px-2 w-full lg:w-1/3 rounded focus:outline-none"
    />
  );
}
