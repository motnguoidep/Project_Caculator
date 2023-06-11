<template>
    <div class="screen">
      <div class="display">
        <div class="history">{{ history }}</div>
        <div class="result">{{ showNumber }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Screen',
    props: {
      showNumber: {
        type: String,
        default: '0'
      },
      history: {
        type: String,
        default: ''
      }
    }
  }
  </script>

<style scoped>
.screen {
  height: 200px;
  border: 2px solid #000;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #000;
  margin-bottom: 10px;
}

.display {
  text-align: right;
  padding: 10px;
}

.history {
  font-size: 20px;
  color: #777;
}

.result {
  font-size: 36px;
  font-weight: bold;
}
</style>
  
 