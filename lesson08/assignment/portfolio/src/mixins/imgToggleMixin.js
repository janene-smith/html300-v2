// exports imgToggleMixin message to console when the component is created.
export const imgToggleMixin = {
    created() {
        console.log('Hello from the mixin!')
    },





// Commenting out working imgToggleMixin

// export const showHide = {
    
    data() {
        return {
            message: 'I am secondary.'
        }
    },
    methods: {
        toggleShowHide() {
            this.isHidden = !this.isHidden;
        }
    }
}

