<template>
    <ui-grid class="joke-grid">
        <template v-for="i in 12">
            <ui-grid-cell class="joke-cell" :key="i">
                <JokeCard :payload="payload.twopart" />
            </ui-grid-cell>

            <ui-grid-cell class="joke-cell" :key="i * 111">
                <JokeCard :payload="payload.single" />
            </ui-grid-cell>
        </template>
    </ui-grid>
</template>

<script>
export default {
    name: "IndexPage",

    data() {
        return {
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
};
</script>
