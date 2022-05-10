<template>
  <table class="table__users">
    <thead>
      <tr>
        <th>#</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Content</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" :key="index">
        <th>{{ index + 1 }}</th>
        <td>{{ user.fullName }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.content }}</td>
        <td>
          <a
            @click="(event) => deleteUser(event)"
            class="delete__icon"
            :data-id="user.id"
            ><img width="20" alt="delete" src="../../assets/delete.png"
          /></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { app } from "./db/connectDb.js";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "DataTable",
  setup() {},
  data() {
    return {
      db: getFirestore(app),
    };
  },
  props: {
    users: Array,
    reload: Function,
  },
  methods: {
    deleteUser: async function (user) {
      const db = getFirestore(app);
      const idDoc = user.path[1].dataset["id"];

      console.log(this.$props.users);
      await deleteDoc(doc(db, "UserContact", idDoc)).then(() => {
        const indexOfId = this.$props.users?.indexOf(idDoc);
        this.$props.users.splice(indexOfId, 1);
        console.log(this.$props.users);
      });
    },
  },
};
</script>
<style scoped>
.table__users {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}
.table__users thead tr {
  border-bottom: 1px solid #aaa;
}
.table__users td,
.table__users th {
  border: 1px solid #ddd;
  padding: 8px;
}
.table__users tr:nth-child(even) {
  background-color: #f2f2f2;
}
.table__users tr:hover {
  background-color: #ddd;
}

.table__users thead th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
}
.delete__icon {
  cursor: pointer;
}
</style>