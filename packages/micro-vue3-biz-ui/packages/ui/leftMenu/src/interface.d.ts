import type { ExtractPropTypes } from 'vue';
import type leftMenu from './leftMenu.vue';


export const LeftMenuProps = {
    routes: {
        require: false,
        type: Array,
        default: () => [],
    },
    isCollapse: {
        require: false,
        type: Boolean,
        default: false,
    },
    activeMenu: {
        require: false,
        type: String,
        default: '',
    },
};

export type LeftMenuPropsType = ExtractPropTypes<typeof LeftMenuProps>;
export type LeftMenuInstanceType = InstanceType<typeof leftMenu>;
