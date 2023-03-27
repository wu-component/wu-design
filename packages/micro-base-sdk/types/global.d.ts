import { RootConfig } from "@/config";

declare global {

  /**
   * Window 的类型提示
   */
  interface Window {
    __SETTING__: RootConfig;
  }
}
