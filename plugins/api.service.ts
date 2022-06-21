import { User, Post } from "@/api";

export default ({ $axios }, inject) => {
  class ApiService {
    constructor() {
      this.User = new User($axios)
      this.Post = new Post($axios)
    }
  }
  inject('api', new ApiService());
}
