import {Mobile} from "./mobile"

import {MobileCollection} from "./mobileCollection"



let mobile1 : Mobile = new Mobile("celular", "Huawei", "p10", "black", 1300);
let mobile2 : Mobile = new Mobile("Iphone", "Apple", "10", "Black", 1234);
let mobile3 : Mobile = new Mobile("Kia", "Nokia", "3310", "blue", 300);
let mobile4 : Mobile = new Mobile("ie", "Apple", "10", "green", 1800);


let myMobiles : Mobile[] = [mobile1, mobile2, mobile3, mobile4];


let myCollection : MobileCollection = new MobileCollection(myMobiles);

console.log(myCollection);


// console.log(myCollection.totalPriceCalculation());

