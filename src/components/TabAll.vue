<script>
export default {
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
        };
    },
    methods: {
        changeTab(tab) {
            this.actualTab = tab;
        }
    },
    mounted() {
        this.actualTab = this.tabs[0];
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
                            <a :class="{ active: actualTab && tab.id === actualTab.id }" @click.prevent="changeTab(tab)"
                                class="nav-link">
                                {{ tab.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="tab1" v-show="actualTab && actualTab.id === 'tab1'">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1>Tab1</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat orci eu nunc tincidunt, ac
                            rhoncus risus ullamcorper. Etiam eleifend sed ex in aliquam. Sed fringilla imperdiet velit nec
                            fermentum. Nulla facilisi. Ut iaculis dui eros, nec euismod ex sodales accumsan. Proin tempus
                            quam sit amet magna scelerisque semper id sit amet dolor. Praesent maximus mattis magna ut
                            malesuada. Etiam ultrices eros sed urna eleifend lacinia. Donec commodo consectetur ante quis
                            iaculis. Donec nec sem convallis, ornare ipsum id, bibendum velit. Morbi vehicula enim leo, in
                            varius arcu commodo lacinia. Proin consectetur sodales libero, nec sagittis eros cursus sit
                            amet. In consectetur dictum enim non ullamcorper.

                            Duis pharetra velit dolor, pretium accumsan felis imperdiet vel. Nam eleifend varius lectus, ac
                            rhoncus massa consectetur eget. Fusce at mollis elit, eu imperdiet quam. Aenean hendrerit, enim
                            vel imperdiet suscipit, leo urna dapibus neque, varius pellentesque ante lorem eget sapien.
                            Vivamus tempor lacus a felis suscipit, sit amet viverra sapien dignissim. Curabitur vulputate
                            eget ex ut faucibus. Vivamus consectetur ipsum odio, sed accumsan leo feugiat vel. Pellentesque
                            nec risus aliquam neque dignissim ullamcorper. Etiam fringilla ligula a nisi condimentum
                            volutpat. Donec nec viverra mi, elementum condimentum eros. Pellentesque massa diam, molestie a
                            tincidunt in, varius non sapien. Ut odio nisi, fringilla id vestibulum a, semper nec lorem.
                            Nulla dignissim, eros vitae interdum sodales, urna elit tincidunt tortor, eu porttitor ligula
                            est vel ligula. Suspendisse viverra pulvinar semper. Ut maximus velit non varius finibus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab2" v-show="actualTab && actualTab.id === 'tab2'">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1>Tab2</h1>
                        <p>
                            Maecenas et lectus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                            posuere cubilia curae; Donec at orci sed massa pretium egestas in condimentum nisl. Sed sit amet
                            lorem eu quam mollis ullamcorper vitae et mauris. Etiam nec faucibus augue, eget rhoncus tellus.
                            Aliquam feugiat eros eu ultrices facilisis. Maecenas hendrerit vestibulum quam, id fermentum
                            nulla ultricies eu. Nullam sit amet ullamcorper dolor. Sed ante nunc, scelerisque sed eros ut,
                            molestie rhoncus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut ante
                            ut lectus vulputate lobortis.

                            Vestibulum a neque luctus, eleifend mauris ac, rutrum nisi. Nullam tincidunt sem eros, ac
                            elementum turpis congue at. Vestibulum pellentesque porttitor arcu. Proin at ultrices justo.
                            Pellentesque lacus velit, tincidunt vel erat eget, condimentum consectetur lacus. Nunc quis nisi
                            quis turpis porttitor interdum nec quis nulla. Suspendisse in dui volutpat, tempus arcu ac,
                            elementum magna. Sed pulvinar molestie sapien quis porttitor. Praesent dictum vulputate
                            dignissim. Etiam ac mollis ante, lacinia convallis felis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab3" v-show="actualTab && actualTab.id === 'tab3'">
            <div class="container">
                <div class="row">
                    <div class="col">
                    <h1>Tab3</h1>
                    <p>
                        Sed elit nisl, aliquam et elit interdum, maximus varius massa. Duis ac pharetra augue, vel
                        lacinia lectus. Nullam scelerisque nibh vitae consectetur congue. Proin elementum ante non lorem
                        sollicitudin gravida. Vestibulum sem tellus, euismod non libero non, blandit sodales mi. In id
                        odio ullamcorper, sollicitudin lacus quis, bibendum arcu. Cras a ex tortor. Nunc maximus
                        molestie leo sed viverra. Sed vitae massa nec diam rhoncus feugiat. Integer non magna cursus,
                        tincidunt lorem id, luctus massa. Phasellus maximus accumsan leo a efficitur. Phasellus
                        consectetur augue at libero semper, eget rhoncus neque feugiat. Nunc molestie risus nec nisi
                        vulputate interdum. Nullam mauris magna, luctus nec lacinia nec, lacinia vitae orci.
                        Pellentesque eu aliquet est.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section></template>