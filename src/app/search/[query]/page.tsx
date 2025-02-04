"use client";

import ArticlesList from "@/components/ArticlesList/ArticlesList";
import LoadingIndicator from "@/components/Loader/LoadingIndicator";
import Pagination from "@/components/Pagination/Pagination";
import EmptyList from "@/components/ui/EmptyList";
import { useArticlesSearch } from "@/hooks/useArticlesSearch";
import { UpperCaseText } from "@/utils/upperCaseText";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function SearchPage() {
  const { query } = useParams<{ query: string }>();
  const { articles, isLoading, hasMore, loadMore, searchArticles } = useArticlesSearch();

  useEffect(() => {
    searchArticles(query);
  }, [query]);

  return (
    <div className="w-full py-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 w-full">
        <h1 className="text-4xl font-bold mb-8">Resultados: {UpperCaseText(query)}</h1>
      </div>
      {isLoading && (
        <LoadingIndicator />
      )}
      {!articles.length ? (
        <EmptyList text="No se encontraron resultados" />
      ) : (
        <>
          <ArticlesList articles={articles} />
          <Pagination isLoading={isLoading} loadMore={loadMore} hasMore={hasMore} />
        </>
      )}
    </div>
  );
}