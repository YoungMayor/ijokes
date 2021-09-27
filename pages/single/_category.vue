<template>
    <JokeCard
        :payload="joke"
        :actions="false"
        :style="{
            margin: '0 !important',
        }"
    />
</template>

<script>
export default {
    name: "IndexPage",

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
