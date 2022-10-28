// https://learnvue.co/tutorials/vue-mixins
// https://v2.vuejs.org/v2/guide/mixins.html?redirect=true

export default {
    data() {
        return {
            toggle: false
        }
    },
    
    methods: {
        // Toggle changes opposite value when called: image border
        toggleBorder() {
            this.toggle = !this.toggle;
        }
    }
}