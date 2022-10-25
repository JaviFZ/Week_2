import {Mobile} from "./mobile.js"


let myMobile : Mobile = new Mobile("celular", "Huawei", "p10", "black", 1300);
let myMobile2 : Mobile = new Mobile("Kia", "Nokia", "3310", "blue", 300);
let myMobile3 : Mobile = new Mobile("iPhone", "Apple", "10", "green", 1800);

let myMobiles : Mobile[] = [myMobile, myMobile2, myMobile3];


for (let i = 0; i < myMobiles.length; i++) {
    let element = myMobiles[i];
    console.log(element.characString());
}


// Mobile.setName("juan");

