const getSecondLargestNum = (array) => {
    const len = array.length;
      if (len === 0) {
        // No Item in Array
        return -1;
      } else {
        const smallestBigInt = BigInt("-1000000000000000000000000000000000000000000000000000000000000000000000");
        let firstLargest = smallestBigInt;
        let secondLargest = smallestBigInt;
        for(let i = 0; i< len; i++) {

          if (typeof parseInt(array[i]) === 'number' && array[i].length <= 1024) {
            let parsedNum = BigInt(array[i]);
            // If item is smaller than first then update both first and second
            if (parsedNum > firstLargest) {
              secondLargest = firstLargest;
              firstLargest = parsedNum;
            }
            // If item is in between first and second then update second
            if (parsedNum < firstLargest && parsedNum >  secondLargest) {
              secondLargest = parsedNum;
            }
          } else {
            // If item is not a number or length is more than 1024 return -1
            secondLargest = smallestBigInt;
            break;
          }
        }
        if (secondLargest === smallestBigInt) {
          // No Item found second largest may be bcz of all numbers are same or
          // Item Length is greater the 1024 or
          // Item is not a number
          return -1;
        }
        return secondLargest.toString();
      }
}

const array1 = ["5", "5", "5"];
// const array2 = ["3", "-2"];
// const array3 = ["5", "5", "4", "2"];
// const array4 = ["-214748364801","-214748364802"];
// const array5 = [];
console.log(getSecondLargestNum(array1));