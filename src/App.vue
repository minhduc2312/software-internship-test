<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <helloWorld msg="Software Internship Test" />
  <ShowContent/>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ShowContent from "./components/WrapperTab.vue";

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
}
</style>
