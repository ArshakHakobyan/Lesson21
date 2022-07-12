// My Split
let someStr = `Մենք կարծում էինք, թե իր շանթերով, Հըսկում է աստված Սասմա սարերին,Մենք ասում էինք՝ անթիվ նավերով ,Կըգան օգնության մեր ծանըր օրին…,Ավա՜ղ մեր պայծառ հույսերի համար.Ահա խորտակված, և ահա կըրկին,Նայում ենք անհույս, մենա՛կ, դալկահար՝,Մորթող թըշնամու արյունոտ ձեռքին։`
function ArshaksSplit(string,seperator,arrLength){
    const resArr = []
    let str = ""
    let cleanStr = ""
    for(i = 0; i < string.length; i++){  
        str += string[i]
      if(string[i] === seperator){
        for(x = 0; x < str.length - 1; x++){
            cleanStr += str[x]
        }
        resArr.push(cleanStr.trim())
        cleanStr = "" 
        str = ""
      }
    }
    resArr.push(str) 
 return resArr.slice(0,arrLength)
};

const strToArr = ArshaksSplit(someStr,",",11)

// My forEach
const testArrBoxers = [
    "Evander HolleyField",
    "Mike Tyson",
    "Roy Jones",
    "Nasim Hamed",
    "Muhamed Ali",
    "Deontay Wilder",
    "Tyson Fyury",
    "Vladimr Klichko",

];

function ArshaksForEach (arr,func) {
    for(let i = 0; i < arr.length; i++){
       func(arr[i], i, arr)
    }
}
ArshaksForEach(testArrBoxers,function(item,index,arr){
    console.log(item+1,index,arr)
});

userId = {
    firstName: "Armen",
    lastName: "Sargsyan",
    gender: "Male",
    age: 19,
    posts: ["Hello", "I love Armenia","Post 3" ],
};

const copyUserIdObj = objCopy(userId);
console.log(copyUserIdObj);
const copyUserIdObj1 = Object.assign({},userId);
console.log(copyUserIdObj1);
const copyUserIdObj2 = {...userId}
console.log(copyUserIdObj2);
// Object copy function
function objCopy (objId){
    const copy = {}
    for(key in objId){
        copy[key] = objId[key] 
    }
    return copy
};


//Arr copy function
function arrCopy (arrId){
    const copy = [];
    for(key in arrId){
        copy[key] = arrId[key] 
    }
    return copy
};
const copyArrBoxers = arrCopy(testArrBoxers);
console.log(copyArrBoxers);
const copyArrBoxers1 = testArrBoxers.slice();
console.log(copyArrBoxers1);
const copyArrBoxers2 = [...testArrBoxers];
console.log(copyArrBoxers2);
console.log(strToArr)
