import { Plugin } from '@nuxt/types'
import { initializeContext } from "~/utils/global-accessor";

const nuxtContextAccessor: Plugin = (context) => {
  initializeContext(context)
}

export default nuxtContextAccessor
