<template>
    <div>
        <div class="single-page">
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleLayout",

    data() {
        return {
            //
        };
    },

    computed: {
        //
    },

    head() {
        return {
            meta: [
                {
                    name: "viewport",
                    content: "initial-scale=unset",
                },
            ],
        };
    },

    created() {
        //
    },
};
</script>

<style>
.single-page {
    width: 450px;
    display: flex;
    background-color: whitesmoke !important;
}

.single-page > * {
    width: 450px;
    display: block;
    background-color: white;
    margin: 0 auto;
    padding: 15px;
}

@page {
    size: auto;

    margin: 15px;
}
</style>
