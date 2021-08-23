<template>
    <ui-card class="joke-card">
        <ui-card-content
            :id="`joke-card-content-${payload.id}`"
            class="joke-card__content"
        >
            <ui-card-media
                square
                class="joke-card__media"
                :style="{
                    backgroundImage: `url('https://picsum.photos/600?random=${payload.id}blur=3')`,
                }"
            >
                <vue-qr
                    :text="appURL"
                    :size="64"
                    :margin="7"
                    class="qr-code"
                ></vue-qr>

                <ui-card-media-content class="joke-card__media-content">
                    <div class="joke-card__media-content-wrapper">
                        <ui-divider>
                            <ui-chip icon="verified_user">
                                {{ payload.category }}
                            </ui-chip>
                        </ui-divider>

                        <div
                            v-if="payload.type == 'single'"
                            :class="[$tt('body1'), 'joke__single']"
                        >
                            {{ payload.joke }}
                        </div>

                        <div v-else :class="['joke__two-parts']">
                            <h2 :class="[$tt('headline6')]">
                                {{ payload.setup }}
                            </h2>

                            <div :class="[$tt('body2')]">
                                {{ payload.delivery }}
                            </div>
                        </div>

                        <ui-chips id="input-chip-set" type="action">
                            <template v-for="(show, cat) in payload.flags">
                                <ui-chip
                                    v-if="show"
                                    :key="cat"
                                    icon="verified_user"
                                >
                                    {{ String(cat).toUpperCase() }}
                                </ui-chip>
                            </template>
                        </ui-chips>
                    </div>
                </ui-card-media-content>
            </ui-card-media>

            <div class="watermark">
                See more at
                <a :href="appURL">
                    {{ appURL }}
                </a>
            </div>
        </ui-card-content>

        <ui-card-actions>
            <ui-card-icons>
                <ui-icon-button
                    icon="content_copy"
                    @click="copyText()"
                ></ui-icon-button>
                <ui-icon-button
                    icon="download"
                    @click="downloadMeme()"
                ></ui-icon-button>
                <ui-icon-button
                    icon="share"
                    @click="shareMeme()"
                ></ui-icon-button>
            </ui-card-icons>
        </ui-card-actions>
    </ui-card>
</template>

<script>
import copy from "copy-to-clipboard";
import webshot from "@youngmayor/webshot";
import VueQr from "vue-qr";

export default {
    name: "JokeCard",

    components: {
        VueQr,
    },

    props: {
        payload: {
            required: true,
            type: Object,
        },
    },

    data() {
        return {
            appURL: window.location.origin,
        };
    },

    methods: {
        __getMemeText() {
            let valid = false;
            let content = "";
            if (this.payload.type == "single") {
                content = this.payload.joke;
            } else if (this.payload.type == "twopart") {
                content = `${this.payload.setup} \n${this.payload.delivery}`;
            }

            if (content.length) {
                content = `${content} \n\n\nSource: ${window.location.origin}`;
            } else {
                content = window.location.href;
            }
            return content;
        },

        copyText() {
            const content = this.__getMemeText();

            copy(content, {
                debug: true,
                message: "Press #{key} to copy",
            });
        },

        downloadMeme() {
            return webshot.download(
                `joke-card-content-${this.payload.id}`,
                `Joke Screenshot: iJokes.jpg`
            );
        },

        shareMeme() {
            return webshot.share(
                `joke-card-content-${this.payload.id}`,
                `iJokes.jpg`,
                {
                    title: "Check out this amazing joke from iJokes",
                    text: "This is an amazing joke from iJokes, you can get more from https://ijokes.netlify.app",
                }
            );
        },
    },
};
</script>

<style lang="scss">
.joke-card {
    width: 90%;
    margin: 5% auto;
    max-width: 450px;

    .joke-card__media-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .joke-card__media-content-wrapper {
            padding: 16px;
            padding-bottom: 20px;
            background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.5) 30%
            );
            color: white;
        }
    }

    .qr-code {
        position: absolute;
        top: 3px;
        right: 3px;
        border-radius: 5px;
    }

    .watermark {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: right;
        font-size: 12px;
        background-color: #1abc9b63;
        font-style: italic;
        padding: 3px 10px;
        color: white !important;
        font-weight: bold;
        text-decoration: none;

        * {
            color: white !important;
            text-decoration: none;
        }
    }
}
</style>
