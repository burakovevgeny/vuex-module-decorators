import { User, Post } from "~/api";
import { Plugin } from '@nuxt/types'

export interface IApiService {
  User: User
  Post: Post
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: IApiService
  }
}

declare module '@nuxt/types' {
  interface Context {
    $api: IApiService
  }
}

const api: Plugin = (_, inject) => {
  class ApiService {
    public User = new User()
    public Post = new Post()
  }
  inject('api', new ApiService());
}

export default api
