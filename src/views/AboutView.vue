<script  lang="ts" setup>
//导入draggable组件
import { VueDraggableNext as draggable } from "vue-draggable-next";
import { ref } from "vue";
import { ElButton } from "element-plus";
const drag = ref(false)
//定义要被拖拽对象的数组
const component_group = ref([
  {
    name: "布局",
    components: [
      { name: 'cn.itxst.com' },
      { name: 'cn.baidu.com' },
      { name: 'cn.taobao.com' },
      { name: 'us.google.com' }
    ]
  },
  {
    name: "基础", components: [
      ElButton,
      { name: "el-select", icon: "", title: "" },
    ]
  },
  {
    name: "扩展", components: [
      { name: "el-input", icon: "", title: "" },
      { name: "el-select", icon: "", title: "" },
    ]
  }
])
const forms = ref([{ name: 'cn.itxst.com' }]);

const onStart1 = (e: any) => {
  console.info("start1", e);
  drag.value = true;
}
const onEnd1 = (e: any) => {
  console.info("end1", e);
  drag.value = false;
};

const onStart2 = (e: any) => {
  console.info("start2", e);
  drag.value = true;
}
const onEnd2 = (e: any) => {
  console.info("end2", e);
  drag.value = false;
};

const onMove = (e: any, a: any) => {
  console.info("move", e, a);
};
const onChoose = (obj: any) => {
  console.info("clone", obj);
  return obj;
}
console.info("sss", ElButton);
</script>


<template>
  <el-container>
    <el-header>{{drag?'拖拽中':'拖拽停止'}}</el-header>
    <el-container>
      <el-aside>
        <!--使用draggable组件-->
        <el-row v-for="(group, i) in component_group" :key="group.name">
          <el-row>{{group.name}}</el-row>
          <el-row>
            <draggable v-model="group.components" :group='{name:"forms",pull:"clone", put:false}' :sort="false"
              :move="onMove">
              <transition-group>
                <div class="item" v-for="element in group.components" :key="element.name">{{element.name}}</div>

              </transition-group>
            </draggable>
          </el-row>
        </el-row>
      </el-aside>
      <el-main>
        <draggable v-model="forms" :group='{name:"forms"}' :sort="true">
          <transition-group>
            <div class="item" v-for="element in forms" :key="element.name" @click="onChoose(element)">{{element.name}}
              <component v-bind:is="element"></component>
            </div>
          </transition-group>
        </draggable>
      </el-main>
      <el-aside>

      </el-aside>
    </el-container>
  </el-container>

</template>
<style scoped>
/*被拖拽对象的样式*/
.item {
  padding: 6px;
  background-color: #fdfdfd;
  border: solid 1px #eee;
  margin-bottom: 10px;
  cursor: move;
}

/*选中样式*/
.chosen {
  border: solid 2px #3089dc !important;
}
</style>