import TopMenu from './src/topMenu.vue';
import { install } from '../utils'

export const BaseTopMenu = install(TopMenu)

export type BaseTopMenuInstance = InstanceType<typeof TopMenu>

export * from './src/interface.d'

export default BaseTopMenu

