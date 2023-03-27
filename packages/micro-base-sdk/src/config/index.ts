import Config from './Config';
import RootConfig from './RootConfig';
import { ConfigOptions } from './type';
const init = (config: ConfigOptions) => {
    if (!window.__SETTING__) {
        window.__SETTING__ = new RootConfig();
    }
    window.__SETTING__.set(config.app.name, new Config(config))
};

const registerGlobalConfig = (config: ConfigOptions) => {
    return init(config);
};

export { Config, registerGlobalConfig, RootConfig };
export default init;
