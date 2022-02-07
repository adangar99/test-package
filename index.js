function add(num1, num2) {
    console.log('this is sum function');
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    console.log('this is subtract function');
    return num1 - num2;
  }
  
  exports.add = add;
  exports.subtract = subtract;