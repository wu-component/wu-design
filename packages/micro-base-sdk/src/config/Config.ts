import { AppConfig, ConfigOptions, LayoutConfig } from './type';

class Config {
    public name = '';

    constructor(config: ConfigOptions) {
        this.app = config.app;
        this.layout = config.layout;
        this.name = config.app.name;
    }

    public app: AppConfig = {
        micro: () => false,
        microPath: '',
        name: 'ex'
    };

    public layout: LayoutConfig = {
        NORMAL_MENU_LEFT_NORMAL_WIDTH: 210,
        NORMAL_MENU_LEFT_CLOSED_WIDTH: 54,
        LAYOUT_TYPE: 'LR',
    };

}

export default Config;
