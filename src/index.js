module.exports = function toReadable (number) {
  const firstNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  const teenNum = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tenthNum = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  if (number == undefined) return;
  if (number <= 10) {return firstNum[number];} 
  else if (number < 20) {
    number = String(number);
    return teenNum[number[1] -1];} 
  else if (number%10 == 0 && number < 100) {
    number = String(number);
    return tenthNum[number[0] -1];}
  else if (number < 100) {
    number = String(number);
    return `${tenthNum[number[0] -1]} ${firstNum[number[1]]}`} 
  else if (number < 1000 && number%100 == 0) {
      number = String(number);
      return `${firstNum[number[0]]} hundred`} 
  else if (number%10 == 0) {
    number = String(number);
    return `${firstNum[number[0]]} hundred ${tenthNum[number[1]-1]}`
  }
  else if (number%100 <= 10 && number !== 100) {
    number = String(number);
    return `${firstNum[number[0]]} hundred ${firstNum[number[2]]}`}
  else if (number%100 < 20) {
    number = String(number);
    return `${firstNum[number[0]]} hundred ${teenNum[number[2] -1]}`}
  else if (number < 1000) { 
    number = String(number);
    return `${firstNum[number[0]]} hundred ${tenthNum[number[1] -1]} ${firstNum[number[2]]}`
  }
}
