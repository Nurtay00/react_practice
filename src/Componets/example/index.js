//
// let str = 'Hi';
//
// const fun = ()=>{};
// const fun2 = function () {
//     // alert('fun2');
// }
// function Hi(name,surname) {
//     // alert(`hi ${name} ${surname}`);
// }
//
// // const FormatPercent = (num)=>{
// // }
//
//
// const Money =(intBank,invest,time,percent)=>{
//     let formatPercent = percent;
//     let currentMoney = intBank;
//     currentMoney = (currentMoney+invest*time)*formatPercent**time;
//     return currentMoney;
// }
//
// let MyBank= Money(1000,200,12,7);
// let MyFriendBank = Money(2000, 300,4,4);
// // alert(MyFriendBank);
//
//
// // Array
//
// let arr = [1,[1,2,3],3,'nurtay'];
//
//
// // alert(arr);
//
// let arr2 = new Array('one',2,3,4);
//
// let arr3 =[];
// let arr4 = new Array();
//
// for(let i = 0; i<arr2.length;i=i+1){
//     // console.log(i,'i')
//     // console.log(arr2[i],'arr2')
// }
//
// // i=0 -->arr2[i]===arr2[0]---> one
// // i=1 -->arr2[i]===arr2[1]---> 2
// // i=2 -->arr2[i]===arr2[2]---> 3
// // i=3 -->arr2[i]===arr2[3]---> 4
//
// let arr5 = [1,2,3,4,5,6,7,8];
// arr5.length=5;
// arr5[8]='Hello'
//
//
// let arr6 = [[1,2,3],
//             [4,5,6],
//             [7,8,9]]
//
//
// let arr7 =[];
//
// for (let i = 0;i<3;i++){
//     let innerArr = []
//     for(let j = 0; j<3;j++){
//         innerArr[j]=j+1
//     }
//     arr7[i]=innerArr;
// }
//
//
//
// // for-loop [[1,2,3],[1,2,3],[1,2,3]]
//
//
// for(let i = 0;i<arr7.length;i++){
//     for (let j = 0; j<arr7[i].length;j++){
//         console.log(arr7[i][j]);
//     }
// }
//
// arr7[1][2]='nurtay';
//
//
// let arr9 =[];
//
// for(let i = 0;i<3;i++){
//     arr9.push([1,2,3]);
// }
//
// let arrA =['a','b','c'];
// let arrB = [1,2,3];
//
// let arrC = [...arrA,...arrB.reverse(),...arrA];
// let arrC2 = arrA.concat('nurtay',[arrB],['school']);
//
//
// //foreach, filter, map, pop, shift
//
// let arr10 = [1,2,3,4,5,6,7,8,9,10];
// let arr11 =[];
//
// // 10%2=0
//
// // for(let i =0;i<arr10.length;i++){
// //     if(arr10[i]%2===0){
// //         arr11.push(arr10[i]);
// //     }
// // }
//
// const funFIlter = (el)=>{
//     if (el%2===0){
//         return true
//     }
//     return false
// }
//
// const arr12 = arr10.filter(funFIlter)
//
// const arr13=['a',3,'asdfa',10,3,4,'asdf'];
// // typeof el === "number"
// const arr14=arr13.filter((el=>{
//     if(typeof el === 'number'){
//         return true
//     }
// return false;
// }));
// const arr15=arr13.filter(el=>{
//     if(typeof el ==='string'){
//         return true
//     }
//     return false
// });
//
//
//
// const arrD=[1,'a', 3,'asdf',90,null,true];
// console.log(arrD.length,'arrD.length');
// console.log(arrD[3]);
// //
// // for(let i = 0; i<arrD.length;i++){
// //     console.log(arrD[i]);
// // }
//
// const funArrow=(el)=>{
//     console.log(el,'funArrow')
// }
// // find only numbers
//
// // || &&
//
// const arrNum=arrD.filter((el)=>{
//     if(typeof el ==='number'){
//         return true
//         console.log('asdf')
//     }
//
//     return false;
//
// })
//
// const arrOther = arrD.filter((el)=>{
//     if(typeof el ==="number" || typeof el ==='string') {
//         return false
//     };
//     return true;
// })
//
// //map;
//
//
// // for(let i = 0; i<arrD.length;i++){
// //     arrG.push(arrD[i]+'s');
// // }
//
// //const arrD=[1,'a', 3,'asdf',90,null,true];
//
// const arrG = arrD.map((el)=>{
//     let x = typeof el;
//     return `${el} type is ${x}`;
// });
//
// const arrL = [1,45,7,23,435,89,100,9];
// let maxNum=arrL[0];
//
// arrL.forEach((el)=>{
//     if(el>maxNum){
//         maxNum=el;
//     }
// })
//
// //1->100 /3 /5
//
// const arrNew=[];
//
// for (let i = 1;i<=100;i++){
//     if(i%3===0 && i%5===0){
//     arrNew.push(i)}
// }
//
// const arrT = ['a','s','d','f'];
//
// //push ,pop, shift, unshift
// arrT.push('t')
//
//
// console.log(arrT);
//
// arrT.pop()
// console.log(arrT);
// arrT.unshift('K')
// console.log(arrT);
// arrT.shift()
// arrT[1]='Nurtay'
// console.log(arrT);
//
//
//
//
//
//

// const array1 = [1,2,3,4,5,'good','ok'];
// const array2 = ['a','b','c','asdf']
//
// const array3 = [...array1,'nurtay',...array2,'ok'];
// const array3 = array1.concat('3')
// console.log(array3.find((el)=>{
//     return el==='ASd'
// }));


// const array4 = array3.slice(0,100);

// function -> (array1,array2)-> array1+array2 -> return array3 start from word 'ok'
// input: array1-> [1,2,3,'ok',4,5], array2=['a','b','c'] -> output->[1,2,3,4,5,'a','b','c'] ->with slice method


// const fun = (array1,array2)=>{
//     const array3=[...array1,...array2];
//     if(array3.includes('ok')){
//         let indexElement = array3.indexOf('ok');
//         return [...array3.slice(0,indexElement),...array3.slice(indexElement+1)]
//     }else{
//         return [];
//     }
// }
//
// const array4 = fun(array1,array2);
//
// const arrT = ['a','s','d','f'];
// const funFactorial =(num)=>{
//     let ans = 1;
//     for(let i=1;i<=num;i++){
//         ans=ans*i;
//     }
//     return ans;
// }


// fun factorial -> input -> num ! 5!=120=1*2*3*4*5

// let okNum = 40;
//
// const funMath = (num, index)=>{
//     okNum = num;
//     return num+index;
// }
//
// const recurFun = (num)=>{
//     if(num>=10){
//         console.log(10);
//         return 0;
//     }
//
//     console.log(num);
//     return recurFun(num+1);
// }
//
// const funEx = (num)=>{
//     if(num/2===1){
//         return ` can be power of 2`
//     }
//     else if(num/2<1){
//         return `can not be power of 2`
//     }
//
//     return funEx(num/2);
// }
//
// const whileEx = (num)=>{
//     let ans = num;
//     while (ans>1){
//         ans=ans/2;
//     }
//
//     console.log(ans)
//     if (ans===1){
//         return true
//     }else{
//         return false
//     }
// }

// const RecFun = (numA,numB,acc)=>{
//     if(numA>numB){
//         return acc;
//     }
//
//     return RecFun(numA+1, numB,acc*numA);
// }
//
// const num = RecFun(1,5,1);
//
// // 5!=> 1*2*3*4*5=120
//
// const array = [2,3,4,3,234,5,544,34];
//
// const bigNum = (arr,maxNum)=>{
//     // console.log(acc)
//     if(arr.length===0){
//         return maxNum
//     }
//     const newArray = arr.concat();
//     if(maxNum>=newArray[0]){
//         arr.shift()
//         return bigNum(arr,newArray[0])
//     }
//     else{
//         arr.shift()
//         return bigNum(arr,maxNum)
//     }
//
//
// }
// const num1 = bigNum(array,array[0])
// console.log(num1)

// const obj = {
//     name:'Nurtay',
//     age:22,
//     city:'Astana'
// }
//
// console.log(obj.weight)
//
// obj.weight = 75;
// delete obj.weight;
// obj.name='Askar';
// console.log(obj['name'])
//
// const date = Object.keys(obj);
// console.log(date);
//
//
// for(let i in obj){
//     console.log(i,obj[i]);
// }







// let exNum = funEx(64);
// console.log(exNum);


// for(let i=1; i<10;i++)



const data = {
    date:new Date(),
    city: [
        {
            name:'Almaty',
            x:12,
            y:30,
        },
        {
            name:'Astana',
            x:20,
            y:49,
        },
        {
            name:'Moscow',
            x:50,
            y:-159,
        },
        {
            name:'London',
            x:-490,
            y:200,
        },
        {
            name:'Dubai',
            x:500,
            y:-49,
        }
    ],
    transport:[
        {name:'plane',
        speed:4,
            cost:40
        },
        {name:'car',
            speed:2,
            cost:20
        },
        {name:'train',
            speed:3,
            cost:30
        }
    ]
}


const busket = {
    waitingList:[],
    approve:[],
}

let bankAccount=3000;



const funCityDis = (fromCity,toCity, transport)=>{
    if (data.city.length===0){
        return 0;
    }
    let from = data.city.filter(el=>{
        if(el.name===fromCity){
            return true
        }
        else return false
    })
    let to = data.city.filter(el=>{
        if(el.name===toCity){
            return true
        }
        else return false
    })

    let distance = ((from[0].x-to[0].x)**2+(from[0].y-to[0].y)**2)**0.5
    let tran = data.transport.filter(el=>{
        if(el.name===transport){
            return true
        }
        else return false
    })
    if (tran.length===0){


    }else busket.waitingList.push(
        {
            cityFrom:fromCity,
            cityTo:toCity,
            distance:distance,
            cost:distance/tran[0].cost,
            time: distance/tran[0].speed,
        }
    )

    return 0;

}

const updateBusket=(index)=>{
    busket.approve.push(busket.waitingList[index])
    bankAccount=bankAccount-busket.approve[0].cost
}

funCityDis("Almaty", "Dubai", "plane")
funCityDis("Astana", "Dubai", "plane")
updateBusket(0)

console.log(busket, bankAccount)






const Example = ()=> {



    return <div>

    </div>
}

export default Example;