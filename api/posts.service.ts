import { $context } from "~/utils/global-accessor";

export interface IPostResponse {
  body: string
  id: number
  title: string
  userId: number
}

interface IPost {
  getPost(): Promise<IPostResponse>
}

export class Post implements IPost {
  async getPost() {
    return $context.$axios.$get<IPostResponse>('https://jsonplaceholder.typicode.com/posts/1')
  }
}
