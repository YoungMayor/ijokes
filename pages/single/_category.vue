<template>
    <JokeCard
        :payload="joke"
        :actions="false"
        :style="{
            margin: '0 auto !important',
            width: '100%',
        }"
    />
</template>

<script>
export default {
    name: "IndexPage",

    layout: "single",

    validate({ params }) {
        const categories = [
            "any",
            "programming",
            "miscellaneous",
            "dark",
            "pun",
            "spooky",
            "christmas",
        ];

        return categories.includes(params.category);
    },

    data() {
        return {
            //
        };
    },

    async asyncData(context) {
        const response = await context.$jokeAPI.getJokes(
            context.params.category,
            1
        );

        return {
            joke: response.data,
        };
    },

    methods: {
        //
    },

    mounted() {
        //
    },

    created() {},
};
</script>
