export interface PaginationParams {
  count?: number;
  days?: number;
  offset?: number;
}

export interface ByTagPaginationParams {
  tag: string;
  match?: string;
  limit?: number;
  days?: number;
  offset?: number;
}

export interface ArticleSearchParams {
  limit?: number;
  offset?: number;
}

export interface ApiResponse<T> {
  data: T[];
  total?: number;
  page?: number;
  limit?: number;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: any;
}