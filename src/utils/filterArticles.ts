import { Article, Filter } from "@/types";

export const filterArticles = (articles: Article[], filter: Filter): Article[] => {
  switch (filter) {
    case 'newest':
      return articles.sort((a, b) => new Date(b.publication_date).getTime() - new Date(a.publication_date).getTime());
    case 'oldest':
      return articles.sort((a, b) => new Date(a.publication_date).getTime() - new Date(b.publication_date).getTime());
    case 'mostPopular':
      return articles.sort((a, b) => b.unique_views - a.unique_views);
    default:
      return articles;
  }
};