<template lang='html'>
<div class="wrapper">
 <TabsView class="content">
    <TabItem title="Test 1">
      <FindMax5/>
    </TabItem>
    <TabItem title="Test 2">Hello From Tab 2</TabItem>
  </TabsView>
</div>
</template>

<script>
import TabsView from "./TabsView.vue";
import TabItem from "./TabItem.vue";
import FindMax5 from "./Test1/FindMax5.vue";

export default {
  name: "ShowContent",
  components: {
    TabsView,
    TabItem,
    FindMax5
  },
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  font-family: "Karla", sans-serif;
}
.wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  margin: 0;
  padding: 20px;
}

.change__style {
  background-color: #eee;
  font-size: 1em;
  margin-bottom: 10px;
  padding: 5px;
}
</style>