<template>
    <div>
        <full-page ref="fullpage" :options="fullPageConfig" id="fullpage">
            <div class="section" id="section-welcome">
                <div class="text-center">
                    <h1 class="app-title ma-0">
                        <span
                            v-for="(letter, index) in [
                                'i',
                                'J',
                                'o',
                                'k',
                                'e',
                                's',
                            ]"
                            :key="letter"
                            :class="[
                                $animateCSS(
                                    index % 2 ? 'bounceInDown' : 'bounceInUp',
                                    1,
                                    'slower'
                                ),
                            ]"
                        >
                            {{ letter }}
                        </span>
                        <img
                            src="/mask-clear.png"
                            alt="Mask"
                            height="72px"
                            :class="[
                                $animateCSS(
                                    'heartBeat',
                                    1,
                                    'slower',
                                    'infinite'
                                ),
                            ]"
                        />
                    </h1>
                    <p
                        class="app-catchphrase"
                        :class="[$animateCSS('lightSpeedInLeft', 4, 'faster')]"
                    >
                        ...for the love of laughs!
                    </p>
                </div>
            </div>

            <div class="section" id="section-select-category">
                <div class="intro text-center">
                    <h1>Select Joke Category</h1>
                </div>

                <ui-chips
                    id="input-chip-set"
                    type="action"
                    :style="{
                        display: 'flex',
                        justifyContent: 'center',
                    }"
                >
                    <ui-chip
                        v-for="(cat, index) in categories"
                        :key="index"
                        icon="face"
                        @click="changeCategory(cat)"
                    >
                        {{ String(cat).toUpperCase() }}
                    </ui-chip>
                </ui-chips>
            </div>

            <div class="section" id="section-jokes">
                <div
                    :style="{
                        position: 'absolute',
                        bottom: '38px',
                        left: '0',
                        right: '0',
                        height: '77px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }"
                >
                    <ui-button
                        icon="auto_stories"
                        @click="getItems(10)"
                        :style="{
                            zIndex: 5,
                        }"
                        :disabled="loading"
                        class="mdc-theme--text-primary-on-dark"
                    >
                        <span>
                            {{
                                loading
                                    ? "Please wait..."
                                    : `More ${selectedCategory} jokes...`
                            }}
                        </span>
                    </ui-button>
                </div>

                <div
                    v-if="!selectedCategory"
                    :style="{
                        position: 'absolute',
                        top: '0',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        zIndex: 8,
                        backgroundColor: '#1abc9ba6',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }"
                >
                    <span :class="[$tt('headline2'), 'text-center']">
                        No category selected
                    </span>
                </div>

                <div
                    class="slide"
                    :id="`joke-slide-${index}`"
                    v-for="(joke, index) in jokes"
                    :key="index"
                >
                    <JokeCard :payload="joke" />
                </div>
            </div>

            <div class="section fp-auto-height" id="section-footer">
                <div
                    class="app-footer"
                    :style="{
                        padding: '20px',
                        color: 'white !important',
                        fontSize: '15px',
                        textAlign: 'center',
                    }"
                >
                    <span>
                        &copy; 2021
                        <a href="https://youngmayor.dev">Meyoron Aghogho</a>
                        All rights reserved.
                    </span>
                </div>
            </div>
        </full-page>
    </div>
</template>

<script>
export default {
    name: "IndexPage",

    data() {
        return {
            fullPageConfig: {
                //Navigation
                menu: "#menu",
                lockAnchors: false,
                anchors: ["welcome", "selectCategory", "jokes", "footer"],
                navigation: true,
                navigationPosition: "right",
                navigationTooltips: [
                    "Welcome to iJokes",
                    "Select jokes category",
                    "Jokes",
                    "Footer",
                ],
                showActiveTooltip: false,
                slidesNavigation: true,
                slidesNavPosition: "top",

                //Scrolling
                css3: true,
                scrollingSpeed: 700,
                autoScrolling: true,
                fitToSection: true,
                fitToSectionDelay: 1000,
                scrollBar: true,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: false,
                loopTop: false,
                loopHorizontal: true,
                continuousVertical: false,
                continuousHorizontal: false,
                scrollHorizontally: false,
                interlockedSlides: false,
                dragAndMove: false,
                offsetSections: false,
                resetSliders: false,
                fadingEffect: false,
                normalScrollElements: "#element1, .element2",
                scrollOverflow: false,
                scrollOverflowReset: false,
                scrollOverflowOptions: null,
                touchSensitivity: 15,
                bigSectionsDestination: null,

                //Accessibility
                keyboardScrolling: true,
                animateAnchor: true,
                recordHistory: true,

                //Design
                controlArrows: true,
                verticalCentered: true,
                sectionsColor: ["#C63D0F", "#99e49f", "#1BBC9B", "#7E8F7C"],
                paddingTop: "3em",
                paddingBottom: "10px",
                fixedElements: "#header, .footer",
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: false,
                parallax: false,
                parallaxOptions: {
                    type: "reveal",
                    percentage: 62,
                    property: "translate",
                },
                dropEffect: false,
                dropEffectOptions: {
                    speed: 2300,
                    color: "#F82F4D",
                    zIndex: 9999,
                },
                waterEffect: false,
                waterEffectOptions: {
                    animateContent: true,
                    animateOnMouseMove: true,
                },
                cards: false,
                cardsOptions: {
                    perspective: 100,
                    fadeContent: true,
                    fadeBackground: true,
                },

                //Custom selectors
                sectionSelector: ".section",
                slideSelector: ".slide",

                lazyLoading: true,

                //events
                onLeave: function (origin, destination, direction) {},
                afterLoad: function (origin, destination, direction) {},
                afterRender: function () {},
                afterResize: function (width, height) {},
                afterReBuild: function () {},
                afterResponsive: function (isResponsive) {},
                afterSlideLoad: function (
                    section,
                    origin,
                    destination,
                    direction
                ) {},
                onSlideLeave: function (
                    section,
                    origin,
                    destination,
                    direction
                ) {},

                // license
                licenseKey: "YOUR_KEY_HERE",
            },

            categories: [
                "any",
                "programming",
                "miscellaneous",
                "dark",
                "pun",
                "spooky",
                "christmas",
            ],

            jokes: [],
            selectedCategory: null,
            loading: false,
        };
    },

    methods: {
        changeCategory(cat) {
            this.selectedCategory = cat;

            this.jokes = [];
            this.$refs.fullpage.api.moveTo("jokes");
            this.getItems();
        },

        async getItems(length = 10) {
            this.loading = true;

            await this.$jokeAPI
                .getJokes(this.selectedCategory, length)
                .then((res) => {
                    this.jokes = [...this.jokes, ...res.data.jokes];

                    setTimeout(() => {
                        this.$refs.fullpage.build();
                        this.loading = false;
                    }, 1000);
                });
        },
    },

    mounted() {
        //
    },
};
</script>

<style lang="scss">
.ma-0 {
    margin: 0;
}

.text-center {
    text-align: center;
}

#fullpage {
    color: white;

    .app-title {
        font-size: 5em;
        font-family: arial, helvetica;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .app-catchphrase {
        font-style: italic;
    }

    #section-jokes {
        .fp-controlArrow {
            bottom: 38px;
            top: unset;
        }

        .fp-slidesNav {
            ul {
                text-align: center;
            }
        }
    }
}
</style>
