<template>
  <InputValid
    id="test__findMax5"
    :input="inputArray"
    :result="result"
    :submit="submit"
    :clear="clear"
    :randomArray="randomArray"
  >
    <p>FindMax5: Please input array</p>
  </InputValid>
</template>


<script>
import InputValid from "./InputValid";
export default {
  components: {
    InputValid,
  },
  setup() {
    const quickSort = (arr) => {
      if (arr.length < 2) return arr;
      const pivotIndex = arr.length - 1;
      const pivot = Number(arr[pivotIndex]);

      const left = [];
      const right = [];

      for (let i = 0; i < pivotIndex; i++) {
        const currentItem = Number(arr[i]);
        if (currentItem > pivot) {
          left.push(currentItem);
        } else {
          right.push(currentItem);
        }
      }

      return [...quickSort(left), pivot, ...quickSort(right)];
    };
    return {
      quickSort,
    };
  },
  data() {
    return {
      inputArray: "",
      result: undefined,
    };
  },
  methods: {
    submit(inputArray = this.inputArray) {
      this.inputArray = inputArray
      this.result = this.quickSort(inputArray).slice(0, 5);
    },
    clear() {
      this.inputArray = "";
      this.result = "";
    },
    randomArray() {
      const result = [];
      const maxNum = 100;
      const minLength = 5;
      const maxLength = 15 - minLength;
      const lengthArray = minLength + Math.floor(Math.random() * maxLength);
      for (let i = 0; i < lengthArray; i++) {
        result.push(Math.floor(Math.random() * maxNum));
      }
      this.inputArray = result;
      this.submit(result);
    },
  },
};
</script>

