<template>
    <ui-card class="joke-card">
        <ui-card-content class="joke-card__content">
            <ui-card-media
                square
                class="joke-card__media"
                :style="{
                    backgroundImage: `url('https://picsum.photos/600?random=${payload.id}blur=3')`,
                }"
            >
                <ui-card-media-content class="joke-card__media-content">
                    <div class="joke-card__media-content-wrapper">
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
                                <ui-chip v-if="show" :key="cat" icon="face">
                                    {{ String(cat).toUpperCase() }}
                                </ui-chip>
                            </template>
                        </ui-chips>
                    </div>
                </ui-card-media-content>
            </ui-card-media>
        </ui-card-content>

        <ui-card-actions>
            <ui-card-icons>
                <ui-icon-button :toggle="icon1"></ui-icon-button>
                <ui-icon-button :toggle="icon2"></ui-icon-button>
                <ui-icon-button icon="share"></ui-icon-button>
            </ui-card-icons>
        </ui-card-actions>
    </ui-card>
</template>

<script>
export default {
    name: "JokeCard",

    props: {
        payload: {
            required: true,
            type: Object,
        },
    },

    data() {
        return {
            icon1: {
                on: "favorite",
                off: "favorite_border",
            },
            icon2: {
                on: "bookmark",
                off: "bookmark_border",
            },
        };
    },
};
</script>

<style lang="scss">
.joke-card {
    width: 90%;
    margin: 5%;

    .joke-card__media-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .joke-card__media-content-wrapper {
            padding: 16px;
            background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.5) 30%
            );
            color: white;
        }
    }
}
</style>
