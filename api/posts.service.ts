import { $context } from "~/utils/global-accessor";

export interface IPostResponse {
  body: string
  id: number
  title: string
  userId: number
}

export class Post {
  async getPost() {
    return $context.$axios.$get<IPostResponse>('https://jsonplaceholder.typicode.com/posts/1')
  }
}
