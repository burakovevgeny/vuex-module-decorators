import { Plugin } from '@nuxt/types'
import { initializeContext } from '~/api'

const nuxtContextAccessor: Plugin = (context) => {
  initializeContext(context)
}

export default nuxtContextAccessor
