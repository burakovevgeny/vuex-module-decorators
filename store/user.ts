import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $api, IUserResponse } from "~/api";

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true,
})
export default class UserModule extends VuexModule {
  public user = {} as IUserResponse

  @Mutation
  private setUser(users: any) {
    this.user = users
  }

  @Action
  async fetchUsers() {
    console.log("ACTION")
    const user = await $api.Post.getPost()
    this.setUser(user)
  }
}
