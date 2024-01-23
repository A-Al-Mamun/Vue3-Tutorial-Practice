<template>
  <h1>{{ msg }}</h1>
  <food-item />
  <food-item />
  <food-item />
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
</style>
