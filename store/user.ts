import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { IUserResponse } from "~/api";
import { $context } from "~/utils/global-accessor";
import { config } from "vuex-module-decorators";

//error handling for all actions by default
config.rawError = true

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true,
})
export default class UserModule extends VuexModule {
  public user = {} as IUserResponse

  @Action
  public async fetchUsers() {
    const user = await $context.$api.user.getUser()
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
