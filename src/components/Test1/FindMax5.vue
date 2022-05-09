<template>
  <div id="test__find5max">
    <p>FindMax5: Please input array</p>
    <p>{{ inputArray }}</p>
    <input class="input__field" v-model="inputArray" placeholder="" />
    <div class="button">
      <button @click="submit">Submit</button>
      <button @click="randomArray">Random</button>
      <button @click="clear">Clear</button>
    </div>

    <template v-if="result">
      <p>=>Output: {{ result }}</p>
    </template>
  </div>
</template>

<script>
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
export default {
  name: "FindMax5",
  data() {
    return {
      inputArray: "",
      result: undefined,
    };
  },
  methods: {
    submit() {
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
          formatInput.push(...input)
        }

        if (formatInput.length !== 0 && formatInput !== "") {
          this.result = quickSort(formatInput).slice(0, 5);

          //simple way
          // this.result = input
          //   .sort((a, b) => (Number(b) > Number(a) ? 1 : -1))
          //   .slice(0, 5);
        }
      }
    },
    clear() {
      this.inputArray = "";
      this.result = "";
    },
    randomArray() {
      const result = [];
      const maxNum = 100;
      const minLength = 3;
      const maxLength = 15 - minLength;
      const lengthArray = minLength + Math.floor(Math.random() * maxLength);
      for (let i = 0; i < lengthArray; i++) {
        result.push(Math.floor(Math.random() * maxNum));
      }
      this.inputArray = result;
      this.submit();
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
  padding: 2px;
  cursor: pointer;
}
.input__field {
  padding: 5px;
  border-radius: 5px;
}
</style>