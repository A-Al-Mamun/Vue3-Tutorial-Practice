<template>
  <h1>{{ msg }}</h1>
  <food-item 
    food-name="Apple" 
    food-descricption="This is red type Apple"
    v-bind:is-favorite='true' />
  <food-item 
    food-name="Banana" 
    food-descricption="This is yellow banana"
    v-bind:is-favorite='false' />
  <food-item 
    food-name="Guava" 
    food-descricption="This is red type Guava"
    v-bind:is-favorite='false' />
</template>

<script>
  export default{
    data() {
      return {
        msg: 'Vue App',
      }
    }
  }
</script>


<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
}
h1{
  text-align: center;
}
#app > div {
  border: 1px solid red;
  background: lightblue;
  display: inline-block;
  margin: 10px;
  padding: 50px;
}
#app > div p{
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
img{
  width: 30px;
}
</style>
