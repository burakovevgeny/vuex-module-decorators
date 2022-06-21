import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { IUserResponse } from "~/api";
import { $context } from "~/utils/global-accessor";

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true,
})
export default class UserModule extends VuexModule {
  public user = {} as IUserResponse

  @Action
  public async fetchUsers() {
    const user = await $context.$api.User.getUser()
    this.setUser(user)
  }

  @Mutation
  private setUser(users: IUserResponse) {
    this.user = users
  }

  get getUser() {
    return this.user
  }
}
