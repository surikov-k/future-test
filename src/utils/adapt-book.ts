import { Book, BookApiResponse } from "../types";

export function adaptBook(apiResponse: BookApiResponse): Book {
 return {
   id: apiResponse.id,
   cover: apiResponse.volumeInfo.imageLinks.thumbnail,
   title: apiResponse.volumeInfo.title,
   categories: apiResponse.volumeInfo.categories,
   authors: apiResponse.volumeInfo.authors || [],
   description: apiResponse.volumeInfo.description || "",
 }
}
