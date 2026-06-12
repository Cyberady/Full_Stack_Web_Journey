/*

* Price List 
coffee - $2
sandwiches - $5
salad - $4
lemon - $3

for example : "You selected coffee. That will be $2."
*/

function selectItem(item) {
  let price = 0

  switch (item) {
    case 'coffee':
      price = 2
      break
    case 'sandwiches':
      price = 5
      break
    case 'salad' :
      price = 4
      break
    case 'lemon' :
      price = 3
      break
    default:
      return `Sorry, we don't sell ${item}.`
  }
  return `YOu selected $(item). That will be $${price}.`
}

console.log(selectItem('coffee'))
console.log(selectItem('sandwiches'))
console.log(selectItem('salad'))
console.log(selectItem('lemon'))