// Numeric seperators 

/*
    Challenge:
        use numeric seperators (_) 
        to seperate the digits into chunks of 3 so they are easier to read
*/

const tomsBankBlanceGBP = 9_007_199_254_740_991

console.log(tomsBankBlanceGBP) // 9007199254740991

// The number will appear the same but when we hit typeof then we get number
console.log(typeof tomsBankBlanceGBP) // number

// BigInt

const tomsBankBlanceGBP = 9_007_199_254_740_991_245n

console.log(tomsBankBlanceGBP)
// The number will appear the same but when we hit typeof then we get bigint
console.log(typeof tomsBankBlanceGBP) // bigint


// we can also do this
const tomsBankBlanceGBP = BigInt(9_007_199_254_740_991_245)
console.log(tomsBankBlanceGBP)
console.log(typeof tomsBankBlanceGBP) // bigint

// Here we can use Bigint instead of 'n' at the end of the number but we have to use BigInt() function to convert it to BigInt

// we cant do math operations with BigInt 
