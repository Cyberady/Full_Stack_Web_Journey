let currentTicketNumber = 0;

function getNextTicketNumber() {
  /*
    Challenge:
        Move the increment operator to the front 
        of the expression
    */
  return ++currentTicketNumber;
}

// Simulating guests arriving and receiving their ticket numbers
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`); // Output: Guest 1, your ticket number is: 1
console.log(`Guest 2, your ticket number is: ${getNextTicketNumber()}`); // Output: Guest 2, your ticket number is: 2
console.log(`Guest 3, your ticket number is: ${getNextTicketNumber()}`); // Output: Guest 3, your ticket number is: 3

// The pre-increment operator increments the variable's
//  value before the result of the 
// increment is used in an expression.

// Pre-increment - ++

// pre-decrement operator is opposite of the pre-increment operator. 
// It decrements the variable's value before the result of the decrement is used in an expression.

// Pre-decrement - --
