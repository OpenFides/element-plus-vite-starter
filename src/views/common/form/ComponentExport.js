import * as Vue from 'vue'
let TextInput = Vue.defineAsyncComponent(
  () => import('./components/TextInput.vue')
)
let NumberInput = Vue.defineAsyncComponent(
  () => import('./components/NumberInput.vue')
)
let AmountInput = Vue.defineAsyncComponent(
  () => import('./components/AmountInput.vue')
)
let TextareaInput = Vue.defineAsyncComponent(
  () => import('./components/TextareaInput.vue')
)
let SelectInput = Vue.defineAsyncComponent(
  () => import('./components/SelectInput.vue')
)
let MultipleSelect = Vue.defineAsyncComponent(
  () => import('./components/MultipleSelect.vue')
)
let DateTime = Vue.defineAsyncComponent(
  () => import('./components/DateTime.vue')
)
let DateTimeRange = Vue.defineAsyncComponent(
  () => import('./components/DateTimeRange.vue')
)

let Description = Vue.defineAsyncComponent(
  () => import('./components/Description.vue')
)
let ImageUpload = Vue.defineAsyncComponent(
  () => import('./components/ImageUpload.vue')
)
let FileUpload = Vue.defineAsyncComponent(
  () => import('./components/FileUpload.vue')
)
let Location = Vue.defineAsyncComponent(
  () => import('./components/Location.vue')
)
let MoneyInput = Vue.defineAsyncComponent(
  () => import('./components/MoneyInput.vue')
)
let DeptPicker = Vue.defineAsyncComponent(
  () => import('./components/DeptPicker.vue')
)
let UserPicker = Vue.defineAsyncComponent(
  () => import('./components/UserPicker.vue')
)
let SignPanel = Vue.defineAsyncComponent(
  () => import('./components/SignPannel.vue')
)

let SpanLayout = Vue.defineAsyncComponent(
  () => import('./components/SpanLayout.vue')
)
let TableList = Vue.defineAsyncComponent(
  () => import('./components/TableList.vue')
)

export default {
  //基础组件
  TextInput,
  NumberInput,
  AmountInput,
  TextareaInput,
  SelectInput,
  MultipleSelect,
  DateTime,
  DateTimeRange,
  UserPicker,
  DeptPicker,
  //高级组件
  Description,
  FileUpload,
  ImageUpload,
  MoneyInput,
  Location,
  SignPanel,
  SpanLayout,
  TableList,
}
