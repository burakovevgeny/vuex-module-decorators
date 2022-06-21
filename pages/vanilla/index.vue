<template>
  <div>
    <div>{{ post.body }}</div>
    <div>{{ user.email }}</div>
    <div>
      <button @click="setIncrement">+</button>
      <button>{{ count }}</button>
      <button @click="setDecrement">-</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { countStore, postStore, userStore } from "~/utils/global-accessor";

export default Vue.extend({
  async asyncData() {
    await postStore.fetchPost()
  },
  async mounted() {
    await userStore.fetchUsers()
  },
  computed: {
    post() {
      return postStore.getPost
    },
    user() {
      return userStore.getUser
    },
    count() {
      return countStore.getCount
    }
  },
  methods: {
    setIncrement() {
      countStore.increment()
    },
    setDecrement() {
      countStore.decrement()
    }
  }
})
</script>
