<script>
export default {
  props: ["actual"],
  data() {
    return {};
  },
};
</script>
<template>
  <section class="content">
    <div class="row">
      <div class="col">
        <h1>{{ actual.name }}</h1>
        <p>{{ actual.content }}</p>
      </div>
    </div>
  </section>
</template>
