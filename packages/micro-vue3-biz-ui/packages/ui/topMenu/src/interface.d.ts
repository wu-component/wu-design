import type { ExtractPropTypes } from 'vue';
import type topMenu from './topMenu.vue';


export const TopMenuProps = {
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

export type TopMenuPropsType = ExtractPropTypes<typeof TopMenuProps>;
export type TopMenuInstanceType = InstanceType<typeof topMenu>;
