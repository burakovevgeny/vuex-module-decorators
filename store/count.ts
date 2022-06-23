import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'count',
  stateFactory: true,
  namespaced: true,
})
export default class CountModule extends VuexModule {
  public count = 0

  @Action
  public decrement() {
    return this.setDecrement()
  }

  @Action
  public increment() {
    return this.setIncrement()
  }

  @Mutation
  private setDecrement() {
    this.count = this.count - 1
  }

  @Mutation
  private setIncrement() {
    this.count = this.count + 1
  }

  get getCount() {
    return this.count
  }
}
