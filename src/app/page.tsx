import Image from "next/image";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/Searchbar";
import CardGrid from "./components/CardGrid"; 
import React from "react";

export default function Home() {
  return (
    <main className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col w-full p-4">
        <SearchBar />
        <CardGrid/>
      </div>
    </main>
  );
}
