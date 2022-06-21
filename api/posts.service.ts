export class Post {
  constructor($axios) {
    this.$axios = $axios
  }
  async getPost() {
    return this.$axios.$get('https://jsonplaceholder.typicode.com/posts/1')
  }
}
