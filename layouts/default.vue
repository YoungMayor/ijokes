<template>
    <div class="page--top-app-bar">
        <ui-top-app-bar
            content-selector="#content-main"
            type="short"
            title="iJokes"
            @nav="$balmUI.onShow('openDrawer')"
            nav-id="drawer"
            v-shadow="20"
        >
            <template #toolbar="{ toolbarItemClass }">
                <!-- <ui-icon-button
                    :class="toolbarItemClass"
                    icon="file_download"
                ></ui-icon-button>
                <ui-icon-button
                    :class="toolbarItemClass"
                    icon="print"
                ></ui-icon-button> -->
                <ui-icon-button
                    :class="toolbarItemClass"
                    icon="bookmark"
                ></ui-icon-button>
            </template>
        </ui-top-app-bar>

        <ui-drawer v-model="openDrawer" type="modal" nav-id="drawer">
            <ui-drawer-header>
                <ui-drawer-title>Header here</ui-drawer-title>
            </ui-drawer-header>
            <ui-drawer-content>
                <ui-list>
                    <ui-item active>
                        <ui-item-first-content>
                            <ui-icon>arrow_back</ui-icon>
                        </ui-item-first-content>
                        <ui-item-text-content>Back</ui-item-text-content>
                    </ui-item>
                    <ui-list-divider></ui-list-divider>
                </ui-list>
            </ui-drawer-content>
        </ui-drawer>

        <div id="content-main">
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
    name: "DefaultLayout",

    data() {
        return {
            openDrawer: false,
        };
    },

    methods: {
        //
    },

    created() {
        //
    },
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>
