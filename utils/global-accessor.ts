import { Context } from "@nuxt/types";
import { getModule } from "vuex-module-decorators";
import CountModule from "~/store/count";
import PostModule from "~/store/post";
import UserModule from "~/store/user";

let $context: Context
let countStore: CountModule
let postStore: PostModule
let userStore: UserModule

export function initializeContext(context: Context) {
  $context = context
  countStore = getModule(CountModule, context.store)
  postStore = getModule(PostModule, context.store)
  userStore = getModule(UserModule, context.store)
}

export {
  $context,
  countStore,
  postStore,
  userStore
}
