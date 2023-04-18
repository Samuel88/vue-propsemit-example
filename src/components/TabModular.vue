<script>
import TabBar from './TabBar.vue';
import TabContent from './TabContent.vue';

export default {
    components: {
        TabBar,
        TabContent,
    },
    data() {
        return {
            actualTab: undefined,
            tabs: [
                {
                    id: 'tab1',
                    name: 'Tab 1'
                },
                {
                    id: 'tab2',
                    name: 'Tab 2'
                },
                {
                    id: 'tab3',
                    name: 'Tab 3'
                }
            ]
        }
    },
    mounted() {
        this.actualTab = this.tabs[0];
    },
    methods: {
        changeTabHandler(tab) {
            this.actualTab = tab;
        }
    }
}
</script>

<template>
    <TabBar :tabs="tabs" :actual="actualTab" @on-change-tab="tab => changeTabHandler(tab)" />
    <TabContent :actual="actualTab" />
</template>
