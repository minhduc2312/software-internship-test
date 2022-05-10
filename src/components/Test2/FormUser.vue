<template>
  <div class="test2__form">
    <h2>Contact Form</h2>
    <form id="form__contact" @submit="checkForm" action="" method="post">
      <div class="form__error" v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>

      <div class="form__input">
        <label for="fullName">Full Name</label>
        <input
          id="fullName"
          v-model="fullName"
          type="text"
          name="fullName"
          required
        />
      </div>

      <div class="form__input">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" name="email" />
      </div>

      <div class="form__input">
        <label for="phone">Phone</label>
        <input
          pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$"
          id="phone"
          v-model="phone"
          type="tel"
          name="phone"
          required
        />
      </div>
      <div class="form__input">
        <label for="content">Content</label>
        <textarea id="content" v-model="content" name="content" required />
      </div>
      <div class="form__submit">
        <input type="submit" value="Submit" />
        <input
          class="button__clear"
          @click="clearForm"
          type="button"
          value="Clear"
        />
      </div>
    </form>
    <div>
      <DataTable :users="users" :reload="getUsersDb" />
    </div>
  </div>
</template>

<script>
import { app } from "./db/ConnectDB.js";
import DataTable from "./DataTable.vue";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

export default {
  setup() {
  },
  components: {
    DataTable,
  },
  mounted() {
    this.getUsersDb();
  },
  data() {
    return {
      errors: [],
      fullName: "",
      email: "",
      phone: "",
      content: "",
      db: getFirestore(app),
      users: [],
    };
  },
  methods: {
    checkForm: function (e) {
      const patternPhone = new RegExp(
        "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$"
      );
      let result = patternPhone.test(this.phone);

      if (result) {
        const data = {
          fullName: this.fullName,
          email: this.email,
          phone: this.phone,
          content: this.content,
          createAt: new Date().toLocaleString(),
        };
        this.addUserDb(data);
      }

      this.errors = [];

      // console.log(result);

      e.preventDefault();
    },
    clearForm() {
      this.fullName = "";
      this.email = "";
      this.phone = "";
      this.content = "";
    },
    addUserDb: async function (data) {
      await addDoc(collection(this.db, "UserContact"), data).then((user) => {
        this.users.push({ id: user.id, ...data });

        this.clearForm();
      });
    },
    getUsersDb: async function () {
      const q = query(
        collection(this.db, "UserContact"),
        orderBy("createAt", "asc")
      );
      this.users = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.users.push({ id: doc.id, ...doc.data() });
      });
    },
  },
};
</script>

<style scoped>
#form__contact {
  margin-top: 10px;
  width: 250px;
  display: inline-block;
  gap: 15px;
}
.form__input {
  display: flex;
  flex-direction: column;
}
.form__input input,
textarea {
  padding: 11px;
  border-radius: 5px;
  border: solid 1px black;
}
.form__input label {
  text-align: left;
  padding-left: 10px;
}
.form__submit {
  display: flex;
  justify-content: space-evenly;
}
.form__submit input {
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #2596be;
  color: #fff;
  cursor: pointer;
}
.button__clear {
  background-color: #f79494 !important;
}
.form__input,
.form__submit {
  margin-bottom: 10px;
}
.test2__form {
  width: 100%;
}
</style>
