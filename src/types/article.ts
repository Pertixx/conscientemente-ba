export interface Author {
  first_name: string;
  last_name?: string;
  email: string;
  profile_image: string;
  account_name: string;
}

export interface Tag {
  id: number;
  name: string;
  taggings_count: number;
}

export interface CoverImage {
  original: string;
  n: string;
  s: string;
  m: string;
  h: string;
  vh: string;
  uh: string;
  thumbnail: string;
  tiny: string;
  vs: string;
  webp: string;
}

export interface RelatedArticle {
  id: string;
  title: string;
  slug: string;
  lead: string;
  cover_image: CoverImage;
  url: string;
  publication_date: string;
}

export interface Article {
  id: string;
  hashid: string;
  title: string;
  lead?: string;
  slug: string;
  entity_name: string;
  url?: string;
  publication_date: string;
  relateds: RelatedArticle[];
  author: Author;
  source?: {
    name?: string;
    url?: string;
  };
  cover_image: CoverImage;
  lang?: 'es' | 'en';
  views?: number;
  unique_views: number;
  reading_time: number;
  body: string;
  tags: Tag[];
}

export type Entity = 'all' | 'journal' | 'vinculos' | 'mindfulness' | 'psicodebate';

export type Filter = 'newest' | 'oldest' | 'mostPopular';