<script>
import TabAll from "./components/TabAll.vue";
import TabModular from "./components/TabModular.vue";
import store from "./stores/store";

export default {
  components: {
    TabAll,
    TabModular,
  },
  mounted() {
    fetch("https://api.json-generator.com/templates/wYwSFhQBsho5/data", {
      method: "GET",
      headers: {
        Authorization: "Bearer 7f02chuawfhpyx54dgf8t1xqx5h5uflwbk7h8fe5",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        store.tabs = result;
        store.actual = store.tabs[0];
        store.loaded = true;
      });
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <TabAll />
      </div>
      <div class="col">
        <TabModular />
      </div>
    </div>
  </div>
</template>
