import LeftMenu from './src/leftMenu.vue';
import { install } from '../utils'

export const BaseLeftMenu = install(LeftMenu)

export type BaseLeftMenuInstance = InstanceType<typeof LeftMenu>

export * from './src/interface.d'

export default BaseLeftMenu


