"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      <input
        type='text'
        placeholder='Buscar...'
        className='border border-gray-300 bg-white/55 rounded-lg p-2 w-96 pr-10 font-semibold text-gray-500'
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        onKeyUp={handleKeyPress}
      />
      <div 
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
        onClick={handleSearch}
      >
        <FaSearch size={16} />
      </div>
    </div>
  );
}