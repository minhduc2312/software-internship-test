<template lang='html'>
<div class="wrapper">
 <TabsView class="content">
    <TabItem title="Test 1">
      <FindMax/>
      <FindFrequent/>
    </TabItem>
    <TabItem title="Test 2">
      <FormUser></FormUser>
    </TabItem>
  </TabsView>
</div>
</template>

<script>
import TabsView from "./TabsView.vue";
import TabItem from "./TabItem.vue";
import FindMax from "./Test1/FindMax.vue";
import FindFrequent from "./Test1/FindFrequent.vue";
import FormUser from "./Test2/FormUser.vue";

export default {
  name: "ShowContent",
  components: {
    TabsView,
    TabItem,
    FindMax,
    FindFrequent,
    FormUser,
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
.wrap__content {
  display: flex;
  justify-content: center;
}
</style>