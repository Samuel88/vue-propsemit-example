<script>
import TabBar from "./TabBar.vue";
import TabContent from "./TabContent.vue";
import store from "../stores/store";

export default {
  components: {
    TabBar,
    TabContent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    changeTabHandler(tab) {
      store.actual = tab;
    },
  },
};
</script>

<template>
  <TabBar
    :tabs="store.tabs"
    :actual="store.actual"
    @on-change-tab="(tab) => changeTabHandler(tab)"
  />
  <TabContent :actual="store.actual" />
</template>
