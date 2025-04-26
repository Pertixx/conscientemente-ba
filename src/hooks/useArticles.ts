"use client";

import { getLastArticles } from "@/endpoints";
import { Article, PaginationParams, Entity, Filter } from "@/types";
import { filterArticles } from "@/utils/filterArticles";
import { useCallback, useState, useEffect } from "react";

interface UseArticlesReturn {
  articles: Article[];
  isLoading: boolean;
  isLoadingMore: boolean;
  error: Error | null;
  hasMore: boolean;
  entity: Entity;
  filter: Filter;
  setEntity: (entity: Entity) => void;
  setFilter: (filter: Filter) => void;
  loadMore: () => Promise<void>;
}

export const useArticles = (initialCount: number = 10, initialDays: number = 0): UseArticlesReturn => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [entity, setEntity] = useState<Entity>('all');
  const [filter, setFilter] = useState<Filter>('newest');
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchArticles = useCallback(async (reset: boolean = false) => {
    try {
      if (reset) {
        setIsLoading(true);
      } else {
        setIsLoadingMore(true);
      }
      setError(null);

      const params: PaginationParams = {
        count: initialCount,
        days: initialDays,
        offset: reset ? 0 : page * initialCount
      };

      const response = await getLastArticles(entity, params);
      const sortedArticles = filterArticles(response || [], filter);

      setArticles(prev => reset ? sortedArticles : [...prev, ...sortedArticles]);
      setHasMore(sortedArticles.length === initialCount);
      if (!reset) {
        setPage(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
      setError(error instanceof Error ? error : new Error('Failed to fetch articles'));
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  }, [entity, filter, page, initialCount, initialDays]);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      fetchArticles(true);
    }
  }, []);

  useEffect(() => {
    if (!isFirstLoad) {
      fetchArticles(true);
    }
  }, [entity, filter]);

  const loadMore = async () => {
    if (!isLoading && hasMore) {
      await fetchArticles();
    }
  };

  return {
    articles,
    isLoading,
    isLoadingMore,
    error,
    hasMore,
    entity,
    filter,
    setEntity,
    setFilter,
    loadMore
  }
}