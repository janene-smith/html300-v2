import { Modal } from "bootstrap";

// exports imgToggleMixin message to console when the component is created.
export const imgToggleMixin = {
    created() {
        console.log('Hello from the mixin!')
    },

// Commenting out working imgToggleMixin

// export const showHide = {
const toggle = {  
    data() {
        return {
            message: 'I am secondary.',
            isShowing: false
        }
    },
    methods: {
        toggleShow() {
            this.isShowing = !this.isShowing;
        }
    }
}
const Modal = {
    template: '#modal',
    mixins: [toggle],
    components: {
        appChild: Child
    }
};

new Vue ({
    el: '#app',
    components: {
        appModal: Modal,
        appTooltip: Tooltip
    }
});

