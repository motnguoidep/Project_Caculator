<template>
  <div class="calculator">
    <ScreenVue :showNumber="displayedNumber" />
    <KeyboardVue @sendValue="handleValue" />
  </div>
</template>

<script>
import ScreenVue from '../components/Screen.vue';
import KeyboardVue from '../components/Keyboard.vue';

export default {
  name: 'NewCalculator', 
  components: {
    ScreenVue,
    KeyboardVue
  },
  data() {
    return {
      displayedNumber: '', 
      isLastInputOperator: false, 
      isResultDisplayed: false 
    };
  },
  methods: {
    handleValue(value) {
      if (
        ((this.isLastInputOperator || this.displayedNumber === '' ) && (value === ')')) ||
        (this.isLastInputOperator && (value === '-' )) || 
        (this.displayedNumber === 'Error') || 
        (this.displayedNumber === '' && (value === '*' || value === '/' || value === '=' || value === ')' || value === '.' || value === '+')) || 
        (this.displayedNumber.includes('=') && value !== 'AC')
      ) {
        return;
      }
      if (value === ')' && this.displayedNumber === '') {
        // this.displayedNumber = '0'; // Đưa về giá trị 0 khi nhập đóng ngoặc mà bên trong trống
        this.displayedNumber.reset()
      }
      switch (value) {
        case 'AC': 
          this.displayedNumber = '';
          this.isResultDisplayed = false;
          break;
        case 'Del':
          this.displayedNumber = this.displayedNumber.slice(0, -1);
          this.isResultDisplayed = false;
          break;
        case '=': 
          this.calculateResult();
          break;
        default:
          
          this.displayedNumber += value;
          break;
      }

      
      this.isLastInputOperator = (value === '*' || value === '-' || value === '/');
    },
    calculateResult() {
      if (this.isLastInputOperator || this.displayedNumber.includes('=')) {
       
        return;
      }

      try {
        const result = eval(this.displayedNumber); 
        this.displayedNumber = result.toString(); 
        this.isResultDisplayed = true;
      } catch (error) {
        this.displayedNumber = 'Error';
      }

      this.isLastInputOperator = false; 
    }
  }
};
</script>

<style>
.calculator {
  margin: 0 auto;
  width: 350px;
  height: 500px;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 3px 2px 13px 0px #000;
  background: #000;
}
</style>