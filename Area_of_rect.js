function calculateArea(length, width) {
  if (typeof length !== 'number' || typeof width !== 'number') {
    throw new Error('Both "length" and "width" should be numbers.');
  }

  if (length <= 0 || width <= 0) {
    throw new Error('Both "length" and "width" should be positive numbers.');
  }

  const area = length * width;
  return area;
}
const length = 5;
const width = 10;
const area = calculateArea(length, width);
console.log("The area of the rectangle is:", area); // Output: The area of the rectangle is: 50

