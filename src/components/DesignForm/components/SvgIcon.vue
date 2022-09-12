<template>
  <svg aria-hidden="true" class="svg-icon-spin">
    <use :xlink:href="symbolId" :fill="color" class="svg-icon-use" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue";
const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#333",
  },
  size: {
    type: String,
    default: "1em",
  },
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const size = computed(() => {
  if (!["em", "px"].includes(props.size.slice(props.size.length-2))) {
    return props.size + "px";
  }
  return props.size;
});
</script>

<style lang="less">
.svg-icon-spin {
  width: v-bind(size);
  height: v-bind(size);
  fill: currentColor;
  vertical-align: middle;
  color: inherit;
  outline: none;
}
</style>
