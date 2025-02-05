import { Entity } from "@/types";

const api = {
  baseURL: process.env.NEXT_PUBLIC_CONTENTOR_URL,
  timeout: Number(process.env.API_TIMEOUT) || 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CONTENTOR_API_KEY}`
  }
};

interface ArticleParams {
  count?: number;
  days?: number;
  offset?: number;
}

interface ArticleSearchParams {
  limit?: number;
  offset?: number;
}

export const endpoints = {
  getLastArticles: async (entity: string, params: ArticleParams = {}) => {
    const searchParams = new URLSearchParams(params as Record<string, string>);
    const response = await fetch(`${api.baseURL}/${entity}/last/?${searchParams}`, {
      method: 'GET',
      headers: api.headers,
      next: { revalidate: 60 }
    });
 
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch articles');
    }
 
    return response.json();
  },

  getTrendingArticles: async (entity: string, params: ArticleParams = {}) => {
    const searchParams = new URLSearchParams(params as Record<string, string>);
    const response = await fetch(`${api.baseURL}/${entity}/trending/?${searchParams}`, {
      method: 'GET',
      headers: api.headers,
      next: { revalidate: 60 }
    });
 
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch articles');
    }
 
    return response.json();
  },

  getArticleById: async (id: string) => {
    const response = await fetch(`${api.baseURL}/${id}`, {
      method: 'GET',
      headers: api.headers,
      next: { revalidate: 60 }
    });
 
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch article');
    }
 
    return response.json();
  },

  getArticlesByTag: async (entity: Entity, params: ArticleParams = {}) => {
    const searchParams = new URLSearchParams(params as Record<string, string>);
    const response = await fetch(`${api.baseURL}/${entity}/by_tag/?${searchParams}`, {
      method: 'GET',
      headers: api.headers,
      next: { revalidate: 60 }
    });
 
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch articles');
    }
 
    return response.json();
  },

  getArticlesBySearch: async (q: string, params: ArticleSearchParams = {}) => {
    const searchParams = new URLSearchParams(params as Record<string, string>);
    const response = await fetch(`${api.baseURL}/all/search/?q=${q}&${searchParams}`, {
      method: 'GET',
      headers: api.headers,
      next: { revalidate: 60 }
    });
 
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch articles');
    }
 
    return response.json();
  }
}

export const {
  getLastArticles,
  getTrendingArticles,
  getArticleById,
  getArticlesByTag,
  getArticlesBySearch
} = endpoints;