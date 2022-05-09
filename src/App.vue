<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <helloWorld msg="Welcome to Your Vue.js App" />
  <ShowContent/>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ShowContent from "./components/ShowContent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ShowContent
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
