import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setObjectProp,
  setFunctionProp
} from '../../utils'
import type { ExtractPropTypes } from 'vue'
import type {
  HandleEvent,
  FightingType,
  FightingIcon,
  FightingTarget
} from '../../interface'

export const Props = {
  /**
   * 链接的地址
   *
   * @see href https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a?qs=%3Ca%3E#attr-href
   */
  href: setStringProp(),
  /** 的文字大小 */
  size: setStringNumberProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 自定义颜色 */
  color: setStringProp(),
  /** 自定义移入状态颜色 */
  hoverColor: setStringProp(),
  /** 是否禁止 copy */
  noCopy: setBooleanProp(),
  /** 是否禁止链接跳转及重新加载（取消默认事件） */
  noLink: setBooleanProp(),
  /** 之前的 icon */
  beforeIcon: setObjectProp<FightingIcon>(),
  /** 之后的 icon */
  afterIcon: setObjectProp<FightingIcon>(),
  /** 点击执行的回调 */
  onClick: setFunctionProp<HandleEvent>()
} as const

/** link 组件 props 类型 */
export type LinkProps = ExtractPropTypes<typeof Props>
