export interface BookListApiResponse {
  totalItems: number,
  items: BookApiResponse[]
}

export interface BookApiResponse {
  id: string,
  volumeInfo: {
    title: string,
    authors?: string[],
    description?: string,
    categories?: string[],
    imageLinks: {
      thumbnail: string
    },
  }
}
