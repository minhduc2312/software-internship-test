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
  </div>
</template>

<script>
import { app } from "./db/connectDb.js";
import {
  addDoc,
  collection,
  getFirestore 
} from "firebase/firestore";

export default {
  setup() {
    console.log(app);
  },
  data() {
    return {
      errors: [],
      fullName: "",
      email: "",
      phone: "",
      content: "",
    };
  },
  methods: {
    checkForm: function (e) {
      const patternPhone = new RegExp(
        "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$"
      );
      let result = patternPhone.test(this.phone);
      console.log(result);

      if (result) {
        const data = {
          fullName: this.fullName,
          email: this.email,
          phone: this.phone,
          content: this.content,
        };
        console.log(data);
        this.addUserDb(data);
      }

      this.errors = [];

      // console.log(result);

      e.preventDefault();
    },
    clearForm() {
      console.log("clear");
      this.fullName = "";
      this.email = "";
      this.phone = "";
      this.content = "";
    },
    addUserDb: async function (data) {
      await addDoc(collection(getFirestore(this.app), "UserContact"), data);
    },
  },
};
</script>

<style scoped>
#form__contact {
  margin-top: 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
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
</style>
