import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: ref(0)
    }
  },
  getters: {
    // 每次使用的 count10 都是在 count 的基础上加10        
    count10(state) {
      console.log('count10 调用了');
      return state.count + 10
    }
  }
});

export const useEE = defineStore('workflow', {
  state: () => {
    return {
      nodeMap: new Map(),
      isEdit: Boolean,
      selectedNode: Object,
      selectFormItem: {},
      design: {},
    }
  },

  actions: {
    selectedNode(node: Object): void {
      // this.selectedNode = node;
    },
    loadForm(val: object): void {
      this.design = val
    },
    setIsEdit(val: Boolean): void {
      // this.isEdit = val
    },
  } 
})
