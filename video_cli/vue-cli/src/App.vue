<template>
  <div id="app">
    <p v-if="show">Some Text</p>
    <button type="button" name="button" v-on:click="show = !show">Button two</button>
<!--comments in vue-->
    <!-- "ingredient" can be any word it is not a keyword it's whatever you want to call it" -->
    <!-- "ingredients"  is the array -->
    <ul v-for="ingredient in ingredients">
       <li>{{ingredient}}</li>
    </ul>

    <br><br>
    <ul v-for="person in persons">
      <li>{{person.name}}</li>
      <li>{{person.age}}</li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello',
      link: "https://www.google.com/",
      counter: 0,
      show: false,
      ingredients: ['meat', 'fruit', 'cookies'],
      persons: [
        {name: 'Aaron', age: 40, color: 'red'},
        {name: 'Max', age: 27, color: 'blue'}
      ],
    }
  },
  methods:{
    changeTitle: function(event){
      this.msg = event.target.value;
    },
    increase: function(){
      this.counter++;
    }

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
