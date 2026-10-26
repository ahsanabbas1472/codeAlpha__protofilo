// let str = "Ahsan Abbas";
// let newstr = str.toUpperCase();

// // console.log(str);
// // console.log(newstr);

// // let fullName = prompt("enter your full name ");

// // let userName = "@" +fullName +fullName.length;

// // console.log(userName);


// let a = 0;
// for(a =0; a<=5; a++) {
//     console.log("a=",a);
// }

// let i = 20;
// while(i<=20) {
//     console.log('Ahsan Abbas');
//     i++;
// }

// let cart = [2500, 4000, 1500, 3000];

// let total =0;
// for(i =0; i < cart.length; i++){
//     total =total + cart[i];    
// }

// console.log("Total bill:Rs =",total);


let products = ["Freezer", "Microwave", "Washing Machine"];
let prices = [50000, 15000, 30000];
let quantities = [2, 3, 1];

let total = 0;
for (i = 0;i < products.length;i++) {

    let subtotal = prices[i] * quantities[i];
    console.log(products[i])+ "Rs :"+ subtotal;
    total = total+subtotal;

}

console.log("total bill is Rs.",+total);
