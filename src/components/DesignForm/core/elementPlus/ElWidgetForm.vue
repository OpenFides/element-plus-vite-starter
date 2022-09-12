<template>
  <div class="m-ElWidgetForm">
    <div v-if="!widgetForm.list || widgetForm.list.length == 0" class="m-ElWidgetForm-form-empty">
      从左侧拖拽来添加字段
    </div>
    <el-form class="m-ElWidgetForm-form" label-suffix=":" :size="widgetForm.config.size"
      :label-position="widgetForm.config.labelPosition" :label-width="`${widgetForm.config.labelWidth}px`"
      :hide-required-asterisk="widgetForm.config.hideRequiredAsterisk">
      <Draggable v-model="widgetForm.list" handle=".m-mover" :group="{ name: 'people', pull: 'clone' }"
        ghost-class="ghost" item-key="type" animation="300" class="m-ElWidgetForm-list" @add="handleMoveAdd">
        <template #item="{ element, index }">
          <transition-group name="fade" tag="div">
            <div class="m-ElWidgetFormItem" v-if="element.key" :key="element.key">
              <ElWidgetFormItem :element="element" :config="widgetForm.config" :selectWidget="widgetFormCurrentSelect"
                @click="handleItemClick(element)"></ElWidgetFormItem>
              <div class="m-ElWidgetFormItem-view-action" v-if="widgetFormCurrentSelect?.key === element.key">
                <SvgIcon name="copy" @click.stop="handleCopyClick(index, widgetForm.list)" />
                <SvgIcon name="delete" @click.stop="handleDeleteClick(index, widgetForm.list)" />
              </div>
              <div class="m-ElWidgetFormItem-view-drag" v-if="widgetFormCurrentSelect?.key === element.key">
                <SvgIcon name="move" class="m-mover" />
              </div>
            </div>
          </transition-group>
        </template>
      </Draggable>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, computed, watch, nextTick } from "vue";
import Draggable from "vuedraggable";
import SvgIcon from "@/components/form/components/SvgIcon.vue";
import { v4 } from "uuid";
import ElWidgetFormItem from "./ElWidgetFormItem.vue";
import { WidgetForm, widgetForm as wf, WidgetFormItem } from "@/components/form/config/element";
defineOptions({
  name: "ElWidgetForm",
});

// const definePropType = <T>(val: any): PropType<T> => val;
// const props = defineProps<{widgetForm:WidgetForm}>();
const props = defineProps({
  widgetForm: {
    type: Object as PropType<WidgetForm>,
    require: true,
    default: () => {
      return wf;
    },
  },
  widgetFormCurrentSelect: {
    type: Object as PropType<null | undefined | WidgetFormItem>,
    default: {},
  },
});

const emits = defineEmits([
  "update:widgetForm",
  "update:widgetFormCurrentSelect",
]);
// console.log("传入参数",props.widgetForm)
const handleMoveAdd = (event: any) => {
  const { newIndex } = event;

  const key = v4().replaceAll("-", "");
  const list = JSON.parse(JSON.stringify(props.widgetForm.list));

  list[newIndex] = {
    ...list[newIndex],
    key,
    model: `${list[newIndex].type}_${key}`,
    rules: [],
  };

  if (
    list[newIndex].type === "radio" ||
    list[newIndex].type === "checkbox" ||
    list[newIndex].type === "select"
  ) {
    list[newIndex] = {
      ...list[newIndex],
      options: {
        ...list[newIndex].options,
        options: list[newIndex].options.options.map((item: any) => ({
          ...item,
        })),
      },
    };
  }

  if (list[newIndex].type === "grid") {
    list[newIndex] = {
      ...list[newIndex],
      columns: list[newIndex].columns.map((item: any) => ({ ...item })),
    };
  }
  emits("update:widgetForm", { ...props.widgetForm, list });

  emits("update:widgetFormCurrentSelect", list[newIndex]);
};
watch(
  () => props.widgetForm,
  (newValue, oldValue) => {
    // console.log("监听到更新了", newValue, oldValue);
  }
);

const handleItemClick = (element: WidgetFormItem) => {
  // console.log(element)
  emits('update:widgetFormCurrentSelect', element)
}

const handleListInsert = (key: string, list: any[], obj: any) => {
  const newList: any[] = []
  list.forEach(item => {
    if (item.key === key) {
      newList.push(item)
      newList.push(obj)
    } else {
      if (item.columns) {
        item.columns = item.columns.map((col: any) => ({
          ...col,
          list: handleListInsert(key, col.list, obj)
        }))
      }
      newList.push(item)
    }
  })
  return newList
}

const handleCopyClick = (index: number, list: WidgetFormItem[]) => {
  const key = v4().replaceAll('-', '')
  const oldList = JSON.parse(JSON.stringify(props.widgetForm.list))

  let copyData: WidgetFormItem = {
    ...list[index],
    key,
    model: `${list[index].type}_${key}`,
    rules: list[index].rules ?? []
  }

  if (
    list[index].type === 'radio' ||
    list[index].type === 'checkbox' ||
    list[index].type === 'select'
  ) {
    copyData = {
      ...copyData,
      options: {
        ...copyData.options,
        options: copyData.options.options.map((item: any) => ({ ...item }))
      }
    }
  }

  emits('update:widgetForm', {
    ...props.widgetForm,
    list: handleListInsert((list[index].key as string), oldList, copyData)
  })

  emits('update:widgetFormCurrentSelect', copyData)
}
const handleListDelete = (key: string, list: any[]) => {
  const newList: any[] = []
  list.forEach(item => {
    if (item.key !== key) {
      if (item.columns) {
        item.columns = item.columns.map((col: any) => ({
          ...col,
          list: handleListDelete(key, col.list)
        }))
      }
      newList.push(item)
    }
  })
  return newList
}
const handleDeleteClick = (index: number, list: WidgetFormItem[]) => {
  const oldList = JSON.parse(JSON.stringify(props.widgetForm.list))

  if (list.length - 1 === index) {
    if (index === 0) {
      nextTick(() => emits('update:widgetFormCurrentSelect', null))
    } else {
      emits('update:widgetFormCurrentSelect', list[index - 1])
    }
  } else {
    emits('update:widgetFormCurrentSelect', list[index + 1])
  }

  emits('update:widgetForm', {
    ...props.widgetForm,
    list: handleListDelete(list[index].key as string, oldList)
  })
}

</script>

<style lang="less">
@primary-color: #409eff;
@primary-background-color: #ecf5ff;

.m-ElWidgetForm {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .m-ElWidgetForm-form-empty {
    height: 42px;
  }

  .m-ElWidgetForm-form {
    flex: 1;
    position: relative;

    .m-ElWidgetForm-list {
      position: absolute;
      width: 100%;
      height: 100%;

      .m-ElWidgetFormItem {
        position: relative;

        .m-ElWidgetFormItem-view {
          padding-bottom: 18px;
          position: relative;
          border: 1px dashed rgba(170, 170, 170, 0.7);
          background-color: rgba(236, 245, 255, 0.3);
          margin: 2px;

          &:after {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: block;
          }

          &:hover {
            background: @primary-background-color;
            outline: 1px solid @primary-color;
            outline-offset: 0;

            &.active {
              outline: 2px solid @primary-color;
              border: 1px solid @primary-color;
              outline-offset: 0;
            }

            .m-ElWidgetFormItem-view-drag {
              display: block;
            }
          }

          &.active {
            outline: 2px solid @primary-color;
            border: 1px solid @primary-color;
          }
        }

        .m-ElWidgetFormItem-view-action {
          position: absolute;
          right: 0;
          bottom: -2px;
          height: 28px;
          line-height: 28px;
          background: @primary-color;
          z-index: 10;

          .svg-icon-spin {
            font-size: 14px;
            color: #fff;
            margin: 0 5px;
            cursor: pointer;

            .svg-icon-use {
              fill: #fff;
            }
          }
        }

        .m-ElWidgetFormItem-view-drag {
          position: absolute;
          left: 0;
          top: -12px;
          height: 28px;
          line-height: 28px;
          background: @primary-color;
          z-index: 10;

          .svg-icon-spin {
            font-size: 14px;
            color: #fff;
            margin: 0 5px;
            cursor: move;

            .svg-icon-use {
              fill: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
