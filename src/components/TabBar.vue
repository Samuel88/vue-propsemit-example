<script>
export default {
    props: ['tabs', 'actual'],
    emits: ['onChangeTab'],
    data() {
        return {

        };
    },
    methods: {
        changeTab(tab) {
            this.$emit('onChangeTab', tab);
        }
    }
}
</script>

<template>
    <section class="tab">
        <div class="container">
            <div class="row">
                <div class="col">
                    <ul class="nav nav-tabs">
                        <li v-for="tab in tabs" :key="tab.id" class="nav-item">
                            <a :class="{ active: actual && tab.id === actual.id }" @click.prevent="changeTab(tab)"
                                class="nav-link">
                                {{ tab.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>