<script>
import store from "../stores/store";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    changeTab(tab) {
      store.actual = tab;
    },
  },
};
</script>

<template>
  <section class="tab">
    <div class="row">
      <div class="col">
        <ul class="nav nav-tabs">
          <li v-for="tab in store.tabs" :key="tab.id" class="nav-item">
            <a
              :class="{ active: tab.id === store.actual.id }"
              @click.prevent="changeTab(tab)"
              class="nav-link"
            >
              {{ tab.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="content">
    <div
      v-for="tab in store.tabs"
      :key="tab.id"
      v-show="tab.id === store.actual.id"
    >
      <div class="row">
        <div class="col">
          <h1>{{ tab.name }}</h1>
          <p>{{ tab.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
