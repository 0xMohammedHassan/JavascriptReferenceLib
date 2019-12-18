
/*
*********JS Reference Lib (JRL) Coded By Mohammed Hassan***************

# JavascriptReferenceLib
Javascript reference library , make the web developer life more easy :)

# Usage:
put the JRL file into your JS folder and insert this code at the top of your file to import this lib:

  
let imported = document.createElement('script');  
document.body.appendChild(imported);  
  
and insert at the end of your body  
<script  src="lib.js"></script>

after that you can call the functions like that :  
numberToString(1234);  
let str1 = rot13("eretrt");
  
If you found any bug or issue feel free to report it.  
All rights are reserved.  

************************************************************
//****Global variables */
let test,a,b,n,ind,howmanytoRemove,AddedItem,start,end,initialValue,currentValue,currentIndex,total,length = 0 ;
let tempArr,tempArr2,tempArr3 = [];
let arr;
let str= "";
/****** Now the functions started */

function myPut(tempArr,tempArr2){

    for(let i = 0; i < tempArr ; i++){

        tempArr2.push(tempArr[i]);

    }

    return tempArr2;
}

function getMaxFromArr(tempArr){

    tempArr2 = tempArr.sort(function(a,b){

        return a-b;
    });

    let max = tempArr2.slice(-1)[0];

    return max;
}

function getMinFromArr(tempArr){

    tempArr2 = tempArr.sort(function(a,b){

        return a-b;
    });

    let min = tempArr2[0];

    return min;

}

function sumEleFromArr(tempArr){

    let result = tempArr.reduce((a,b) =>  a+b);

    return result;

}

function rot13(message){
    var alpha1 = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnop'.split('');
    var alpha2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOP'.split('');
  let temp = message.split('');
  let pos = '';
  
  for(let i =0 ; i < temp.length ; i++){
  if(temp[i].match(/[a-z]/)){
  pos = alpha1.indexOf(temp[i]);
  temp[i] = alpha1[pos + 13];
  }else if(temp[i].match(/[A-Z]/)){
  pos = alpha2.indexOf(temp[i]);
  temp[i] = alpha2[pos + 13];
  }}
  return temp.join('');
  }

  ////Check valid parentheses from a string
  function validParentheses(tempArr){
    let len = tempArr.length;
    let check =0;
    for(let i =0 ; i < len && check >= 0 ; i++){
    console.log(check,tempArr[i]);
    if(tempArr[i] == "("){
    check++;
    }else{
    check--;
    }}
    return (check==0);
    }

    ///////////Build a tower for fun :)
    function towerBuilder(test) {
        let spc = "";
        let star = "";
        let finalArr = [];
        for(let i =1 ; i <= test ; i++){
        spc = (" ").repeat(test - i);
        star = ("*").repeat((i * 2 )-1);
        finalArr.push(spc + star + spc);
        }
        return finalArr;
        }


        ////Function to sort the odd numbers


        function sortArray(tempArr) {
            if(tempArr ===[]){
            return [];
            }
             let oddNums = tempArr.filter((x) => x % 2 !== 0 ).sort((a,b) => a - b);
               return tempArr.map( (a) => a % 2 ? oddNums.shift() : a );
             // return finalArr;
             }


             /////function to find the unique numbers in array

             function findUniq(tempArr) {
                let cleanArr = tempArr.sort(function(a,b){
                return a-b;
                });
                let unique = [];
                for(let i =0 ; i < cleanArr.length ; i++){
                if(cleanArr[i] !== cleanArr[i+1] && cleanArr[i] !== cleanArr[i-1]){
                unique.push(cleanArr[i]);
                }}
                return parseFloat(unique);
                }
                //////////////////


                ////Function to guess and find the missing letter 

                function findMissingLetter(tempArr)
                {
                let arr2 = tempArr.join('');
                for(let i = 0; i < arr2.length ; i++){
                if(arr2.charCodeAt(i+1) - arr2.charCodeAt(i) !== 1 ){
                return String.fromCharCode(arr2.charCodeAt(i) + 1);
                }}
                return arr2;
                }

                ////Function to sort the words based on the numbers inside it

                function order(tempArr){
                    let firstArray = tempArr.toString().split(' ');
                   let nums = ['1','2','3','4','5','6','7','8','9'];
                   let finalArray = [];
                    for(let i =0 ; i < nums.length ; i++){
                     for(let j =0 ; j < firstArray.length ; j++){
                       if(firstArray[j].includes(nums[i])){
                         finalArray.push(firstArray[j]);
                      
                     }}}
                     return finalArray.join(' ');
                   }

                   ////Function to get the elements from an array that is not exist on the second array

                   function array_diff(a, b) {
                    let finalArr = a.filter(function(a) {
                   return !b.includes(a)});
                   return finalArr;
                   }



                   //////Function to sum/calculate the digital root

                   function digital_root(test) {
                    let count =0;
                  let arrOfNumbers = test.toString().split('').map(function(a){
                  return parseInt(a);
                  });
                  
                  while(arrOfNumbers.length > 1){
                  count = arrOfNumbers.reduce(function(a,b){
                  return a+b;
                  });
                  
                  arrOfNumbers = count.toString().split('').map(function(a){
                  // '1' '5'
                    return parseInt(a);
                  });
                  }
                  return count;
                  }

                  /////function to get the trailling zero's

                  function zeros(test) {
                    let count = 0;
                      while( test > 0){
                        test = Math.floor(test/5);
                        count +=test
                      }
                      return count;
                    }

                    ////Function to calculate the duplicates from a string


                    function duplicateCount(test){
                        let temp = test.toString().toLowerCase();
                        let temp2 = temp.split('').sort();
                        let dups = [];
                        for(let i=0 ; i < temp2.length  ; i++){
                        
                        if(temp2[i] == temp2[i+1]){
                          dups.push(temp2[i]);
                      
                        }
                        }
                        let len = dups.length ;
                        let set1 = new Set(dups);
                        return set1.size;
                      }

                      /////Function to find the odd integer

                      function findOdd(A) {
                        let temp = A.map(String);
                        let inc =0;
                        for(let i = 0; i < temp.length ; i++){
                        for(let j=0 ; j < temp.length ; j++){
                         if(temp[i] == temp[j]){
                        inc++;
                        }
                          }
                        if(inc % 2 !==0){
                        return parseInt(temp[i]);
                        }
                        }
                        }

                        ////Function to find the shortest word

                        function findShort(test){
                            return test.split(' ').map(item => item.length).sort( ( a, b) => a -b)[0];
                          }

                          ///Function to create a legit phone number

                          function createPhoneNumber(test){
                            test.splice(0,0,"(");
                            test.splice(4,0,")"," ");
                            test.splice(9,0,"-");
                            return test.join('');
                            }

                            ////Function to find the sum of all numbers between a and b

                            function getSum( a,b )
                            {
                            let max = Math.max(a,b);
                            let min = Math.min(a,b);
                            let sum =0;
                              if(a===b){
                              return a;
                              }else{
                            for(let i =min ; i <= max ; i++)  {
                            sum +=i;
                            }
                              }
                              return sum;
                              
                            }
                            /////Function to discard any vowel that exist on any string
                            function disemvowel(test) {
                                return test.replace(/"|a|u|i|o|e|"/gi,"");
                              }

                              ///Function to detect if the number is sequare or not

                              var isSquare = function(n){
                                if(n <0){
                                return false;
                                }
                                else if(n >= 0 && Number.isInteger(Math.sqrt(n)) ){
                                return true;
                                }
                                  return false; 
                                }

                                ///Function to get the max and min number from an array

                                function highAndLow(test){
                                    let tempArray = test.split(" ");
                                    let max = Math.max.apply(null,tempArray);
                                    let min = Math.min.apply(null,tempArray);
                                     return max + " "+ min}

                                     ///Function to get the middle char

                                     
                                     function getMiddle(a)
                                     {
                                       let len = a.length;
                                      if(len % 2 === 0){
                                      let mid = len / 2;
                                      
                                      
                                      return s[mid-1]+s[mid ];
                                      }else{
                                      let mid2 = Math.floor(len / 2);
                                      return s[mid2];
                                      }
                                       
                                     }

                                     ///Function to calculate the count of vowel's in a string

                                     function getCount(test) {
                                        var vowelsCount = 0;
                                        let tempStr = test.split("");
                                        let vowel = ["a","e","i","o","u"];
                                      for(let i = 0; i < str.length ; i++){
                                        for(let j = 0; j < str.length ; j++){
                                        if(tempStr[i].includes(vowel[j])){
                                        vowelsCount++;
                                        }
                                      }
                                      }
                                        
                                        return vowelsCount;
                                      }

                                      //Function to remove the space from a string

                                      function noSpace(test){
                                        return test.replace(/\s+/g,"");
                                        
                                        }
                                        ///Function to convert number to string

                                        function numberToString(test) {
                                            return `${test}`; 
                                          }

                                          //Function to remove first and last char 

                                          function removeChar(test){
                                            let newChars = test.slice(1,-1);
                                            return newChars;
                                         };
                                         ///Function to repeat any string N times

                                         function repeatStr (n, a) {
                                            return a.repeat(n);
                                          }

                                        ///Function to find the smallest integer in array

                                        class SmallestIntegerFinder {
  
                                            findSmallestInt(test) {
                                            let smallNum;
                                            smallNum =test.sort((a,b) => a-b);
                                            
                                              return smallNum[0];
                                            }
                                          } 

                                          //function to calculate the sum of positives in array

                                          function positiveSum(test) {
                                            let sum =0;
                                              if(test == []){
                                              return 0;
                                              }else{
                                              for(let i =0; i < test.length; i++){
                                              
                                              if(test[i] > 0){
                                              sum += test[i];
                                            
                                            }
                                              }
                                              }
                                              return sum;
                                            }


/////////////////*****************Methods implementations**********************

                     ///Splice : the return value is a new array contain the removed items

                                function spliceMe(tempArr,ind,howmanytoRemove,AddedItem ){

                                  return tempArr.splice(ind,howmanytoRemove,AddedItem);


                                }



                                //Slice: return the selected elements in an arrayas a new array object
                                //start (Optional): specifies where to start the selection, negative value mean it will start from the end, if start was omitted, it acts like '0'

                                //end (Optional): specifies where to end the selection, just to note that the last element will not be selected , so for eg: if the end was 4 it will add the index 3 not 4, also if it was omitted it will select all the items from the start position to the final element
                                function sliceMe(tempArr,start,end){
                                  return tempArr.slice(start,end);

                                }


                                ///Reduce : used to reduce the array to a single value

                                function reduceMe(tempArr){
                                  //Here we will make it sum all integers in the array
                                  return tempArr.reduce(function(total,currentValue,currentIndex,arr){
                                    return total + currentValue;
                                    //currentIndex,initialValue and arr will be 0 

                                  },initialValue)

                                }

                                //concat: used to join 2 or more arrays, this method doesn't change the existing arrays , it just returns a new array.

                                //Here in our function , we will just concat 2 arrays
                                function concatMe(tempArr,tempArr2){
                                  return tempArr.concat(tempArr2);

                                }

                                //indexOf() : return the element position in the array , if the element is not exist , it will return -1.

                                //indexOf(item,start) : the item is the array , and the start is optional , its the position that we will start from it.

                                //Our function will print the index for all elements in the array in the console log

                                function indexOfAll(tempArr){

                                  for(let i = 0 ; i <tempArr.length ; i++){

                                    console.log(indexOf(tempArr[i]));
                                  }
                                  /*
                                  tempArr.forEach((a)=> console.log(indexOf(tempArr[a]))); // same like above
                                  */
                                 //Note if we want to search from end to start , we can use lastIndexOf()

                                }

                                ////Substr: extract parts from string , and it doesn't change the original string
                                //it take start and length , but the length is optional
                                function substrMe(str,start,length){
                                  
                                  return str.substr(start,length);

                                }

                                ///Substring() : extract characters from string between 2 specified string

                                function SubstringMe(str,start, end){

                                  return str.substring(start,end);



                                }
