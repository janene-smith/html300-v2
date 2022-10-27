<template>
    <img class="thumbnail" :src="src" :alt="alt" :title="Title" />

</template>

<script>
    export default {
        data () {
           return {
                
            }
        },
        props: {            
            src: {type: String}, 
            alt: {type: String},
            title: {type: String},
        },

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
    @mixin box-shadow($x, $y, $blur, $c) { 
        -webkit-box-shadow: $x $y $blur $c;
        -moz-box-shadow: $x $y $blur $c;
        -ms-box-shadow: $x $y $blur $c;
        box-shadow: $x $y $blur $c;
    }
    div {
        @include box-shadow(0px, 0px, 4px, #fff);
    
    }
</style>