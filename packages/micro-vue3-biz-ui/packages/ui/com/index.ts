import Com from './src/com.vue'

import { install } from '../utils'

export const FCom = install(Com)

export type ComInstance = InstanceType<typeof Com>

export * from './src/interface.d'

export default FCom
