<template>
<div>
  <p>CLASS COMPONENTS</p>
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
import { Vue, Component } from 'vue-property-decorator'
import { countStore, postStore, userStore } from "~/utils/global-accessor";

@Component({
  async asyncData() {
   await postStore.fetchPost()
  }
})
export default class IndexPage extends Vue {

  async mounted() {
    await userStore.fetchUsers()
  }

  get count() {
    return countStore.getCount
  }

  get post() {
    return postStore.getPost
  }

  get user () {
    return userStore.getUser
  }

  public setIncrement() {
    countStore.increment()
  }

  public setDecrement() {
    countStore.decrement()
  }
}
</script>
