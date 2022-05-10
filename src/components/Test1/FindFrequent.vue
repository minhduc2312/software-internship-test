<template>
  <InputValid
    id="test__findFrequent"
    :input="inputArray"
    :result="result"
    :submit="submit"
    :clear="clear"
    :randomArray="randomArray"
  >
    <p>FindFrequent: Please input array</p>
  </InputValid>
</template>

<script>
import InputValid from "./InputValid";

export default {
  name: "FindMax5",
  components: {
    InputValid,
  },
  setup() {
    const findFrequent = (arr) => {
      const hashmap = {};
      let max = 1;
      let result = arr[0];
      arr.forEach((item) => {
        if (hashmap[item]) {
          hashmap[item]++;
          if (hashmap[item] > max) {
            max = hashmap[item];
            result = item;
          }
        } else {
          hashmap[item] = 1;
        }
      });
      return result;
    };
    return {
      findFrequent,
    };
  },
  data() {
    return {
      inputArray: "",
      result: undefined,
      previousNumber: -1,
    };
  },
  methods: {
    submit(inputArray = this.inputArray) {
      this.inputArray = inputArray;
      this.result = this.findFrequent(inputArray);
    },
    clear() {
      this.inputArray = "";
      this.result = "";
    },
    randomArray() {
      const example = [
        [3, 7, 3],
        ["null", "hello", true, "null"],
        ["false", "up", "down", "left", "right", true, "false"],
      ];

      const maxRandom = example.length;
      let currentIndex = Math.floor(Math.random() * maxRandom);
      while (currentIndex === this.previousNumber) {
        currentIndex = Math.floor(Math.random() * maxRandom);
      }
      this.previousNumber = currentIndex;
      this.inputArray = example[currentIndex];
      this.submit(this.inputArray);
    },
  },
};
</script>
    
