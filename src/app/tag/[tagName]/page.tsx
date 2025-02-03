"use client";

import ArticlesList from "@/components/ArticlesList/ArticlesList";
import LoadingIndicator from "@/components/Loader/LoadingIndicator";
import Pagination from "@/components/Pagination/Pagination";
import { useArticlesByTag } from "@/hooks/useArticlesByTag";
import { UpperCaseText } from "@/utils/upperCaseText";
import { useParams, useSearchParams } from "next/navigation";

type Params = {
  tagName: string;
}

export default function TagPage() {
  const { tagName } = useParams<Params>();
  const searchParams = useSearchParams();
  const entity = searchParams.get('entity') || '';

  const formattedTagName = tagName.replace(/-/g, ' ');
  const { articles, isLoading, error, loadMore, hasMore } = useArticlesByTag(formattedTagName.toLowerCase(), entity);

  return (
    <div className="w-full py-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 w-full">
        <h1 className="text-4xl font-bold mb-8">{UpperCaseText(formattedTagName)}</h1>
      </div>
      {isLoading && (
        <LoadingIndicator />
      )}
      <ArticlesList articles={articles} />
      <Pagination isLoading={isLoading} loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
}