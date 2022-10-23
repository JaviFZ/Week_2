import { Mobile } from "./mobile.js";
let myMobile = new Mobile("celular", "Huawei", "p10", "black", 1300);
let myMobile2 = new Mobile("Kia", "Nokia", "3310", "blue", 300);
let myMobile3 = new Mobile("iPhone", "Apple", "10", "green", 1800);
let myMobiles = [myMobile, myMobile2, myMobile3];
for (let i = 0; i < myMobiles.length; i++) {
    const element = myMobiles[i];
    console.log(element.characString());
}
// Mobile.setName("juan");
