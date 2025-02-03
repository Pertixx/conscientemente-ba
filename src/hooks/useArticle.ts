"use client";

import { getArticleById } from "@/endpoints";
import { Article } from "@/types";
import { useState, useEffect } from "react";

interface UseArticleReturn {
  article: Article | null;
  isLoading: boolean;
  error: string | null;
}

export const useArticle = (id: string): UseArticleReturn => {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getArticleById(id);
        setArticle(response);
      } catch (error) {
        console.error('Error fetching article:', error);
        setError('No se pudo cargar el artículo');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  return { article, isLoading, error };
};