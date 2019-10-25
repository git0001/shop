import BackTop from '../components/common/backtop/BackTop.vue'

export const BackTopMixin = {
    data() {
        return {
            isShowBackTop: false,
        }
    },
    components: {
        BackTop
    },
    methods: {
        BackTopClick() {
            this.$refs.scroll.scrollTo(0, 0)
        },

    },
    watch: {
        scrollY(val) {
            this.isShowBackTop = val > 500;
        }
    },

}