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
import { Vue, Component } from 'vue-property-decorator'
import { getModule } from "vuex-module-decorators";
import UserModule from "~/store/user";
import PostModule from "~/store/post";
import CountModule from "~/store/count";

@Component({
  async asyncData(context) {
   const postStore = getModule(PostModule, context.store);
   await postStore.fetchPost()
  }
})
export default class IndexPage extends Vue {

  private userStore = getModule(UserModule, this.$store);
  private postStore = getModule(PostModule, this.$store);
  private countStore = getModule(CountModule, this.$store);

  private async mounted() {
    await this.userStore.fetchUsers()
  }

  get count() {
    return this.countStore.getCount
  }

  get post() {
    return this.postStore.getPost
  }

  get user () {
    return this.userStore.getUser
  }

  public setIncrement() {
    this.countStore.increment()
  }

  public setDecrement() {
    this.countStore.decrement()
  }
}
</script>
