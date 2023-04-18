import { reactive } from "vue";

const store = reactive({
  tabs: [],
  actual: {},
  loaded: false,
});

export default store;
