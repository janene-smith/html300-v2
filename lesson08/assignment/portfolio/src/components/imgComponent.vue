<template>
    <figure>
        <!-- Use @click linked to method in mixin. If toggle value is true, add class border -->
        <img class="thumbnail" 
            :src="src"
            :alt="alt" 
            :title="title"
            @click="toggleBorder" :class="{ border: toggle }" 
        />
        <figcaption>
            {{ title }}
        </figcaption>
    </figure>
</template>

<script>
import toggleBorder from '../mixins/imgToggleMixin.js'
    export default {
        data() {
            return {
               
            }
        },
        mixins: [
            toggleBorder
        ],
        props: {
            src: {type: String},
            alt: {type: String},
            title: {type: String},
        }
    }
    
</script>

<style scss scoped>
    .thumbnail {
        float: left;
        width: 478px;
        height: 330px;
        object-fit: cover;
        padding: 10px;
        
        margin: 10px;
        margin-top: 20px;
        margin-bottom: 5px;
        text-decoration-color: black;
        border-style: solid;
        border-color: darkgray;
        
    }
    /*  Figcaption CSS */
    figure {
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    figcaption {
        display: inline-flex;
        flex-wrap: wrap;
        font: italic small sans-serif;
        padding: .25rem;
        text-indent: 1rem;
        text-align: center;
        color: black;
    }
    
    .imgBorder {
        border-color: darkgray !important;
        border-width: 3px !important;
   }


</style>