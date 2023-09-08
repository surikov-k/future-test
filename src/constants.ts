export enum AppRoute {
  Root = '/',
  Details = 'book/:id',
}

export const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
export const REQUEST_TIMEOUT = 5000;

export const BOOKS_PER_PAGE = 30;

export const categories = {
  all: 'all',
  art: 'art',
  biography: 'biography',
  computers: 'computers',
  history: 'history',
  medical: 'medical',
  poetry: 'poetry'
}

export const sorting = {
  relevance: 'relevance',
  newest: 'newest'
}
