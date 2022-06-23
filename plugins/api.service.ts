import { User, Post } from "~/api";
import { Plugin } from '@nuxt/types'

export interface IApiService {
  user: User
  post: Post
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
  class ApiService implements IApiService {
    public user = new User()
    public post = new Post()
  }
  inject('api', new ApiService());
}

export default api
