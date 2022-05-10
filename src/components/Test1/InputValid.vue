<template>
  <div :id="id">
    <p><slot></slot></p>
    <p class="input__display">{{ inputArray }}</p>
    <input class="input__field" v-model="inputArray" placeholder="" />

    <div class="button">
      <button @click="handleSubmit">Submit</button>
      <button @click="handleRandomArray">Random</button>
      <button @click="handleClear">Clear</button>
    </div>

    <template v-if="result">
      <p>=>Output: {{ result }}</p>
    </template>
  </div>
</template>

<script>
import { FormKit } from "@formkit/vue";
export default {
  setup() {},
  data() {
    return {
      inputArray: "",
      isSubmit: false,
      FormKit,
    };
  },
  updated() {
    if (this.isSubmit) {
      this.inputArray = this.$props.input;
    }
    this.isSubmit = false;
  },
  props: ["submit", "randomArray", "clear", "input", "result", "id"],
  methods: {
    handleRandomArray() {
      this.$props.randomArray();
      this.inputArray = this.$props.input;
      this.isSubmit = true;
    },
    handleSubmit() {
      const formatInput = [];
      if (this.inputArray !== "") {
        if (
          typeof this.inputArray === "object" &&
          this.inputArray.length !== 0
        ) {
          formatInput.push(...this.inputArray);
        } else {
          let lengthStringInput = this.inputArray.length;

          if (this.inputArray[0] === "[") {
            this.inputArray = this.inputArray.slice(1, lengthStringInput);
            lengthStringInput = this.inputArray.length;
          }

          if (this.inputArray[lengthStringInput - 1] === "]") {
            this.inputArray = this.inputArray.slice(0, lengthStringInput - 1);
          }
          const input = this.inputArray.split(",");
          formatInput.push(...input);
        }

        if (formatInput.length !== 0 && formatInput !== "") {
          this.$props.submit(formatInput);
          this.isSubmit = true;

          //simple way
          // this.result = input
          //   .sort((a, b) => (Number(b) > Number(a) ? 1 : -1))
          //   .slice(0, 5);
        }
      }
    },
    handleClear() {
      this.inputArray = "";
      this.$props.clear();
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
}
.button button {
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  background-color: antiquewhite;
}
.input__field {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
}
.input__display {
  line-break: anywhere;
}
#test__findMax5,
#test__findFrequent {
  width: 50%;
}
</style>