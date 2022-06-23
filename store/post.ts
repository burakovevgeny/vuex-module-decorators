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


  //the syntactic sugar for action with immediately mutation
  @MutationAction({ mutate: ['post'], rawError: true })
  public async fetchPost() {
    const post = await $context.$api.post.getPost()
    return { post }
  }

  get getPost() {
    return this.post
  }
}
