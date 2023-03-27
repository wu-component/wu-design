<script lang="ts" setup name="FLink">
  import { Props } from './props'

  const prop = defineProps(Props)

  /**
   * 点击触发
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (prop.disabled || prop.noLink) {
      /**
       * 阻止默认事件
       *
       * @see event.preventDefault https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
       */
      evt.preventDefault()
      return
    }
  }
</script>

<template>
  <div role="link" :class="classList" :style="styleList">
    测试
  </div>
</template>
