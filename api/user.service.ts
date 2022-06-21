export class User {
  constructor($axios) {
    this.$axios = $axios
  }
  async getUser() {
    return this.$axios.$get('https://jsonplaceholder.typicode.com/todos/1')
  }
}
