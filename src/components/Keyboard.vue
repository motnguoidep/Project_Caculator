<template>
  <div class="custom-keyboard">
    <div class="custom-key-row">
      <div v-for="num in customNumbers" :key="num" class="custom-key-cell">
        <button @click="handleValue(num)" class="custom-key-button custom-number-key">{{ num }}</button>
      </div>
    </div>
    <div class="custom-key-row">
      <div v-for="oper in customOperators" :key="oper" class="custom-key-cell">
        <button @click="handleValue(oper)" class="custom-key-button custom-operator-key">{{ oper }}</button>
      </div>
    </div>
    <div class="custom-key-row">
      <div class="custom-key-cell">
        <button @click="clearInput" class="custom-key-button custom-special-key">AC</button>
      </div>
      <div class="custom-key-cell">
        <button @click="deleteCharacter" class="custom-key-button custom-special-key">Del</button>
      </div>
      <div class="custom-key-cell">
        <button @click="handleValue('(')" class="custom-key-button custom-special-key">(</button>
      </div>
      <div class="custom-key-cell">
        <button @click="handleValue(')')" class="custom-key-button custom-special-key">)</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomKeyboard',
  data() {
    return {
      customNumbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'],
      customOperators: ['+', '-', '*', '/', '='],
      customSpecialKeys: ['AC', 'Del', '(', ')']
    };
  },
  methods: {
    handleValue(value) {
      this.$emit('sendValue', value);
    },
    clearInput() {
      this.$emit('sendValue', 'AC');
    },
    deleteCharacter() {
      this.$emit('sendValue', 'Del');
    }
  }
};
</script>

<style scoped>
.custom-keyboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
}

.custom-key-row {
  display: contents;
}

.custom-key-cell {
  display: flex;
}

button {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e0e0e0;
}

.custom-number-key {
  color: #333;
}

.custom-operator-key {
  color: #f00;
}

.custom-special-key {
  background-color: #808080;
  color: #fff;
}
</style>