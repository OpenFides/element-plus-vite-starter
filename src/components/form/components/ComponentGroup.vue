<template>
  <div class="m-ComponentGroup">
    <div class="m-ComponentGroup-title">{{ title }}</div>
    <Draggable v-model="list" handle=".m-mover" :group="{ name: 'people', pull: 'clone', put: false }"
      ghost-class="ghost" :sort="false" item-key="type" animation="300" class="m-ComponentGroup-list"
      @change="changeLog">
      <template #item="{ element }">
        <div class="m-element m-mover">
          <svg-icon class="m-element-icon" :name="element.type"></svg-icon>
          <div class="m-element-label">{{ element.label }}</div>
        </div>
      </template>
    </Draggable>
  </div>
</template> 
<script setup lang="ts">
import Draggable from "vuedraggable";
import { ref } from "vue";
import SvgIcon from "./SvgIcon.vue";
defineOptions({
  name: "ComponentGroup",
});
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  list: {
    type: Array,
    required: true,
  },
});

// const list = ref<{ id: number; title: string }[]>([]);

// for (let i = 0; i < 10; i++) {
//   list.value.push({
//     id: i,
//     title: "张三_" + i,
//   });
// }

const changeLog = (val: any) => {
  console.log(val);
};
</script>

<style lang="less">
.m-ComponentGroup {
  .m-ComponentGroup-title {
    padding: 8px 12px;
    font-size: 13px;
  }

  .m-ComponentGroup-list {
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;

    .m-element {
      width: calc(100% / 3);
      height: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .m-element-icon {
        padding: 10px 5px 12px;
      }

      .m-element-label {
        font-size: 12px;
      }

      &:hover {
        background: #2e73ff;
        color: #fff;

        .svg-icon-use {
          fill: #fff;
        }
      }
    }
  }
}
</style>
