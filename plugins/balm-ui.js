import Vue from 'vue'
import BalmUI from 'balm-ui'
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'

Vue.use(BalmUI, {
    $theme: {
        // (Optional) New in 8.38.0, See ThemeColor type in APIs.
    },
    UiTopAppBar: {
        // some props
    },
})
Vue.use(BalmUIPlus)