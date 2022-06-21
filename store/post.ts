import { Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { IPostResponse } from "~/api";
import { $context } from "~/utils/global-accessor";

@Module({
  name: 'post',
  stateFactory: true,
  namespaced: true,
})
export default class PostModule extends VuexModule {
  public post = {} as IPostResponse

  @MutationAction({ mutate: ['post'] })
  public async fetchPost() {
    const post = await $context.$api.Post.getPost()
    return { post }
  }

  get getPost() {
    return this.post
  }
}
