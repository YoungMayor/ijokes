<template>
    <div>
        <!-- <ul id="menu">
            <li data-menuanchor="welcome">
                <a href="#anchor1">Welcome to iJokes</a>
            </li>
            <li data-menuanchor="selectCategory">
                <a href="#anchor2">Select jokes category</a>
            </li>
            <li data-menuanchor="jokes">
                <a href="#anchor3">LOL</a>
            </li>
            <li data-menuanchor="footer">
                <a href="#anchor3">Footer</a>
            </li>
        </ul> -->
        <!-- <ui-tab-bar id="menu" av-model="active">
            <ui-tab
                v-for="(tab, index) in {
                    welcome: 'Welcome to iJokes',
                    selectCategory: 'Select jokes category',
                    jokes: 'LOL',
                    footer: 'Footer',
                }"
                :key="index"
                :data-menuanchor="index"
            >
                {{ tab }}
            </ui-tab>
        </ui-tab-bar> -->

        <div id="fullpage">
            <div class="section" id="section-welcome">
                <div class="text-center">
                    <h1 class="app-title ma-0">
                        iJokes
                        <img src="/mask-clear.png" alt="Mask" height="72px" />
                    </h1>
                    <p class="app-catchphrase">For the love of laughs</p>
                </div>

                <!-- <ui-card
                    class="intro-card"
                    outlined
                    :style="{
                        borderColor: 'transparent',
                    }"
                >
                    <ui-card-content class="intro-card__content">
                        <ui-card-media
                            square
                            class="intro-card__media"
                            xxxstyle="{
                                backgroundImage: `url('/mask-clear.png')`,
                            }"
                        >
                            <ui-card-media-content
                                class="intro-card__media-content"
                            >
                                <div
                                    class="
                                        text-center
                                        intro-card__media-content-wrapper
                                    "
                                >
                                    <div>
                                        <h2 :class="[$tt('headline2')]">
                                            iJokes
                                        </h2>

                                        <div>For the love of laughs...</div>
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
                                        >
                                            {{ String(cat).toUpperCase() }}
                                        </ui-chip>
                                    </ui-chips>
                                </div>
                            </ui-card-media-content>
                        </ui-card-media>
                    </ui-card-content>
                </ui-card> -->
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
                    >
                        {{ String(cat).toUpperCase() }}
                    </ui-chip>
                </ui-chips>
            </div>

            <div class="section" id="section-jokes">
                <div class="slide" id="slide1" v-for="i in 36" :key="i">
                    <JokeCard v-if="i % 2" :payload="payload.single" />
                    <JokeCard v-else :payload="payload.twopart" />
                </div>
            </div>

            <div class="section fp-auto-height" id="section-footer">
                <div class="intro">
                    <h1>Hope you enjoyed it</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import fullpage from "fullpage.js";

export default {
    name: "IndexPage",

    data() {
        return {
            categories: [
                "programming",
                "political",
                "nsfw",
                "racist",
                "sexist",
            ],

            payload: {
                twopart: {
                    category: "Programming",
                    type: "twopart",
                    setup: "Example Buildup: Jokes about anti-vaxxer parents never get's old",
                    delivery: "Example Delivery: Just like their kids",
                    flags: {
                        nsfw: true,
                        religious: true,
                        political: false,
                    },
                    id: Math.random(),
                    safe: true,
                    lang: "en",
                },
                single: {
                    category: "Programming",
                    type: "single",
                    joke: "Example Joke: I have these weird muscle spasms in my gluteus maximus. \n I figured out from my doctor that everything was alright: \n He said 'Weird flex, butt okay'",
                    flags: {
                        nsfw: true,
                        religious: true,
                        political: false,
                    },
                    id: Math.random(),
                    safe: true,
                    lang: "en",
                },
            },
        };
    },

    methods: {
        //
    },

    mounted() {
        var myFullpage = new fullpage("#fullpage", {
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
            slidesNavPosition: "bottom",

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
            dropEffectOptions: { speed: 2300, color: "#F82F4D", zIndex: 9999 },
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
            onSlideLeave: function (section, origin, destination, direction) {},

            // license
            licenseKey: "YOUR_KEY_HERE",
        });
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

    // .intro-card {
    //     width: 90%;
    //     margin: 5% auto;
    //     max-width: 450px;
    //     background-color: transparent;

    //     .intro-card__media {
    //         .intro-card__media-content {
    //             display: flex;
    //             flex-direction: column;
    //             justify-content: flex-end;

    //             .intro-card__media-content-wrapper {
    //                 padding: 16px;
    //                 background-image: linear-gradient(
    //                     to bottom,
    //                     rgba(0, 0, 0, 0) 0%,
    //                     rgba(0, 0, 0, 0.5) 100%
    //                 );
    //                 color: white;
    //             }
    //         }
    //     }
    // }

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
    }
}
</style>
