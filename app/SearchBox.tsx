"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search/?term=${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center"
    >
      <input
        type="text"
        placeholder="Search keywords ..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="flex-1 w-full h-14 rounded-sm placeholder-gray-400 text-gray-500
        outline-none bg-transparent dark:text-blue-400"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-blue-900 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
export default SearchBox;
