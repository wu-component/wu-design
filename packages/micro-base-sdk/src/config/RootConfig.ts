import Config from "@/config/Config";

class RootConfig {
    private config: Record<any, Config> = {};

    constructor() {
        this.init();
    }

    public init() {
        this.config = {};
    }

    public get(name: string): Config {
        return this.config[name];
    }

    public set(name: string, config: Config) {
        this.config[name] = Object.assign({}, (this.config[name] || {}),  config);
    }

}

export default RootConfig;
