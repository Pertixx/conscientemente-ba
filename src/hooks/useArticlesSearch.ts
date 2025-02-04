import { useState, useCallback } from 'react';
import { getArticlesBySearch } from '@/endpoints';
import { Article, ArticleSearchParams } from '@/types';

interface UseArticlesSearchReturn {
  articles: Article[];
  isLoading: boolean;
  error: Error | null;
  searchArticles: (query: string) => void;
  hasMore: boolean;
  loadMore: () => Promise<void>;
}

export const useArticlesSearch = (
  initialCount: number = 10
): UseArticlesSearchReturn => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchArticles = useCallback(async (query: string, reset = false) => {
    if (!query.trim()) {
      setArticles([]);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const params: ArticleSearchParams = {
        limit: initialCount,
        offset: page * initialCount
      };
      
      const response = await getArticlesBySearch(query, params);

      setArticles(prev => reset ? response : [...prev, ...response]);
      setHasMore(response.length === initialCount);
      setPage(prev => prev + 1);

    } catch (error) {
      console.error('Error searching articles:', error);
      setError(error instanceof Error ? error : new Error('Failed to search articles'));
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  }, [initialCount, page]);

  const searchArticles = (query: string) => {
    setSearchQuery(query);
    fetchArticles(query, true);
  };

  const loadMore = async () => {
    if (!isLoading && hasMore) {
      await fetchArticles(searchQuery);
    }
  };

  return {
    articles,
    isLoading,
    error,
    searchArticles,
    hasMore,
    loadMore
  };
};