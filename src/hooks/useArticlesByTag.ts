"use client";

import { getArticlesByTag } from "@/endpoints";
import { Article, ByTagPaginationParams } from "@/types";
import { useCallback, useEffect, useState } from "react";

interface UseArticlesByTagReturn {
  articles: Article[];
  isLoading: boolean;
  error: Error | null;
  loadMore: () => Promise<void>;
  hasMore: boolean;
}

export const useArticlesByTag = (tag: string, entity: string, initialCount: number = 10, initialDays: number = 100): UseArticlesByTagReturn => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchArticlesByTag = useCallback(async (reset = false) => {
    try {
      setIsLoading(true);
      setError(null);

      const params: ByTagPaginationParams = {
        tag: tag,
        match: 'all',
        limit: initialCount,
        days: initialDays,
        offset: reset ? 0 : page * initialCount
      };

      const response = await getArticlesByTag('all', params);

      setArticles(prev => reset ? response : [...prev, ...response]);
      setHasMore(response.length === initialCount);
      if (reset) {
        setPage(1);
      } else {
        setPage(prev => prev + 1);
      }
      
    } catch (error) {
      console.error('Error fetching articles by tag:', error);
      setError(error instanceof Error ? error : new Error('Failed to fetch articles by tag'));
    } finally {
      setIsLoading(false);
    }
  }, [entity, tag, page, initialCount, initialDays]);

  useEffect(() => {
    fetchArticlesByTag(true);
  }, [tag, entity]);

  const loadMore = async () => {
    if (!isLoading && hasMore) {
      await fetchArticlesByTag();
    }
  };

  return {
    articles,
    isLoading,
    error,
    loadMore,
    hasMore
  }
};