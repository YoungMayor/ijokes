<template>
    <ui-grid class="joke-grid">
        <template v-for="i in 12">
            <ui-grid-cell class="joke-cell" :key="i">
                <JokeCard
                    :payload="{
                        category: 'Programming',
                        type: 'twopart',
                        setup: 'Example Buildup: Jokes about anti-vaxxer parents never get\'s old',
                        delivery: 'Example Delivery: Just like their kids',
                        flags: {
                            nsfw: true,
                            religious: true,
                            political: false,
                        },
                        id: i,
                        safe: true,
                        lang: 'en',
                    }"
                />
            </ui-grid-cell>

            <ui-grid-cell class="joke-cell" :key="i">
                <JokeCard
                    :payload="{
                        category: 'Programming',
                        type: 'single',
                        joke: 'Example Joke: I have these weird muscle spasms in my gluteus maximus. \n I figured out from my doctor that everything was alright: \n He said \'Weird flex, butt okay\'',
                        flags: {
                            nsfw: true,
                            religious: true,
                            political: false,
                        },
                        id: i * 3,
                        safe: true,
                        lang: 'en',
                    }"
                />
            </ui-grid-cell>
        </template>
    </ui-grid>
</template>

<script>
export default {
    name: "IndexPage",

    data() {
        return {
            //
        };
    },
};
</script>
