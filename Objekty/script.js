// //----------------------
// //definice objektu

// Obj = {};

// //neprazdneho

// Obj_ = {
//     "Id":1,
//     "Jmeno":"Richard",
//     "Prijmeni":"Pokorny",
// };

// console.log(Obj_);

// //--vypis for loopem / je jiny nez u pole

// for(let k in Obj_){
//     console.log(Obj_[k]);
//     console.log(k);
// };

// //pridam hodnotu do objektu-------------------------

// // teckova notace

// Obj.Pozice = "reditel";
// Obj.Firma = "principal";

// console.log(Obj);
// for(let i in Obj){
//     console.log(Obj[i]);
// }

// //zavorkova

// Obj["Vek"]=30;
// Obj["Majetek"]=null;

// console.log(Obj);
// for(let i in Obj){
//     console.log(Obj[i]);
// }

// //pridam si tu Objekt do Objektu

// Obj.Objekt = Obj_;

// console.log(Obj);

// //--------------------------------------------

// //spojovani objetku

// let user1 = {
//     name: "John",
//     surname: "Doe",
//     age: 20
//   };
//   let user2 = {
//     name: "Pavel"
//   };
//   let finalUser = {};
  
//   //merging objects using Object.assign -- toto prepisuje
//   Object.assign(finalUser, user1,user2);
//   console.log(finalUser);
  
//   //cloned object with spread ...
//   console.log(user1);
//   let uu = {...user1};
//   console.log(uu);
//   console.log("-----")
//   //mergin objects using spread operator - taky to prepisuje
//   let finalUser2 = {...user1, ...user2};
//   console.log(finalUser2);
  
//   //taking some atributes from object
//   let {name, age} = user1;
//   console.log(name, age);
//   console.log(name);
// //--------------------------------

// //toto spojuje dva existujici
//   let source = {
//     jmeno: "Anna",
// };
// let target = {
//     prijmeni: "Valova",
//     vek: 22
// };

// Object.assign(target,source,Obj);
// console.log(target);
// //-----------------------------------------------------------
