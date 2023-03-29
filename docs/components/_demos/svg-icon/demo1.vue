<script lang="ts" setup>
  import { FIconApps, FIconBluetooth, FIconBook } from '@wu-web/fighting-icon'
</script>

<template>
  <f-svg-icon>
    <f-icon-apps />
  </f-svg-icon>

  <f-svg-icon color="red">
    <f-icon-bluetooth />
  </f-svg-icon>

  <f-svg-icon size="34px" :icon="FIconBook" />
</template>
