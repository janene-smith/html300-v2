<template>
    <img class="thumbnail" :src="src" :alt="alt" :title="Title" />
   
</template>

<script>
    export default {
        data () {
            return {
                props: {            
                    src: {type: String}, 
                    alt: {type: String},
                    title: {type: String},

                }
            }
        },
_template: '#image',
get template() {
return this._template;
},
set template(value) {
this._template = value;
},
        mixins: [showHide]
    };
</script>

<style scoped>
    .thumbnail {
        float: left;
        width: 478px;
        height: 330px;
        object-fit: cover;
        padding: 10px;
        
        margin: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        text-decoration-color: black;
        border-style: solid;
        border-color:darkgray;
        
    }

</style>