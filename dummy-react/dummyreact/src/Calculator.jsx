function add(number1,number2) {
    return (parseInt(number1)+parseInt(number2));
  }
  
  function subtract(number1,number2) {
    return (parseInt(number1)-parseInt(number2));
  }
  
  function multiply(number1,number2) {
    return (parseInt(number1)*parseInt(number2));
  }
  
  function divide(number1,number2) {
    return ((parseInt(number1)/parseInt(number2)).toPrecision(2));
  }
  
  export {add, subtract, multiply, divide};