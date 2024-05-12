//// TASK 1. Array daxilində tək yerdə duran elementləri ekrana verin
// let array = [10,16,2,30,4,5,6,7,8,9,10];
// for (let index = 0; index < array.length; index++) {
//     if(index%2==1){
//         console.log(array[index]);
//     }
// }
//// TASK 2. Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin
// let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let count = 0;
// for (let index = 0; index < array.length; index++) {
//     if(array[index]%5==0 && array[index]!=0){
//         count++;
//     }
// }
// console.log(count);

//// TASK 3. Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.
// let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for (let index = array.length-1; index >=0; index--) {
//     if (array[index]%7==0) {
//         console.log(array[index]);
//         break;
//     }
// }

//// TASK 4. Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini
//// dəyişən proqram tərtib edin
// let array = [30,1,2,3,4,5,7,8,27,10,11,12,13,14,25,-5];
// let max = array[0];
// let min= array[0];
// let lengmax=0;
// let lengmin=0;
// for (let index = 0; index < array.length; index++) {
//     if(array[index]>max){
//         lengmax=index;
//     }
//     if (array[index]<min) {
//         lengmin=index;
//     }
// }
// max=array[lengmax]
// min=array[lengmin];
// array.splice(lengmin,1,max);
// array.splice(lengmax,1,min);
// console.log(array);

//// TASK 5. Verilmiş array daxilində ixtiyari(random) ədədi ekrana çıxaran
//// proqram tərtib edin

// let array = [30,1,2,3,4,5,7,8,27,10,11,12,13,14,25,-5];
// let random_index = Math.floor(Math.random() * array.length);
// let random_eded=array[random_index];
// console.log(random_eded);

//// TASK 6. 1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana
//// verin
// for (let index = 0; index <100; index++) {
//    if(index%10==1){
//     console.log(index);
//    }
// }
//// TASK 7. Daxil olunmuş ifadənin polindrom olduğunu yoxlayın. (polindrom
////dedikdə tərsi və düzü eyni olan ifadə başa düşülür məsələn ütü,
////121,1331,4554 və s.)

//// console.log("version 1 || BİRİNCİ BU ÜSUL AĞLIMA GƏLDİ.BU KOD ANCAQ STRINGLƏR ÜÇÜN İŞLƏYİR.");
//// let ifade= "ənənə";
//// let ifade_array = ifade.split("");
//// let sozun_yarisi=Math.floor((ifade_array.length/2));
//// let count=0;
//// for (let index = 0; index <sozun_yarisi; index++) {
////     if (ifade_array[index]===ifade_array[ifade_array.length-index-1]) {
////         count++;
////       }
//// }
//// if(count==sozun_yarisi){
////     console.log("Bu ifade polindromdur :",ifade);
//// }
//// else{
////     console.log("Bu ifade polindrom deyil :",ifade);
//// }

// console.log("version 2 ||DAHA ASAN YOLUNUN OLDUĞUNU ANLADIM.BU KOD HƏM ƏDƏD HƏM STRİNGLƏR ÜÇÜN İŞLƏYİR");
// let ifade = 123321;
// let reversed;
// if (typeof ifade==='number'){
//     reversed = parseInt(ifade.toString().split('').reverse().join(''));
//     if(ifade==reversed){
//         console.log("Bu ifade polindromdur :",ifade);
//     }
//     else{
//         console.log("Bu ifade polindrom deyil :",ifade);
//     }
// }
// else {
//     reversed = ifade.split('').reverse().join('');
//     if(ifade==reversed){
//         console.log("Bu ifade polindromdur :",ifade);
//     }
//     else{
//         console.log("Bu ifade polindrom deyil :",ifade);
//     }
// };

//// TASK 8. Daxil olunmuş iki sözün anaqram olduğunu yoxlayın ( anaqram
//// dedikdə sözlərinin tərkibinin eyni olması başa düşülür, məsələn oslo
//// solo və s.)
// let ifade_1= "adam";
// let ifade_2= "dama";
// if (ifade_1.length!=ifade_2.length) {
//     console.log("ANAQRAM DEYIL");
// }
// else{
//     ////sozdeki herfleri elifba sirasina gore duzur
//     let sorted_1= ifade_1.toLowerCase().split('').sort().join('');
//     let sorted_2= ifade_2.toLowerCase().split('').sort().join('');
//     if (sorted_1===sorted_2) {
//         console.log(ifade_1+" ve "+ifade_2+" anaqramdir.");
//     }
//     else{
//         console.log(ifade_1+" ve "+ifade_2+" anaqram deyil.");
//     }
// }

//// TASK 9 Daxil olunmuş mətndə saitləri silən proqram yaradın

// let metn = "Sərçə budaqda tut yeyirdi. Hərdən tut dənələri sürüşüb yerə düşürdü.Ağacın altında bir cücə yerə düşən tutları dənləyir və sərçəyə deyirdi: Sağ ol, qardaş, çox şirin tutdur!"
// let saitler = ["a","ı","o","u","e","ə","i","ö","ü","A","I","O","U","E","Ə","İ","Ö","Ü"];
// console.log(saitler.length);
//  let saitsiz_metn="";
//  for (let index = 0; index < metn.length; index++) {
//     if(!saitler.includes(metn[index])){
//         saitsiz_metn+=metn[index];
//     }
//  }
//  console.log(saitsiz_metn);

//// TASK 10 İstifadəçi daxil edən ədəd sayda ixtiyarı(random) simvoldan ibarət string ifadə yaradın (məsələn input:5 output: qeg8d)

// let input=6;
// let elifba="abcdefghijklmnopqrstuvwxyz1234567890";
// let result="";
// let random_index;

// for (let index = 1; index<=input; index++) {
//     random_index=Math.floor(Math.random()*elifba.length);
//     result+=elifba[random_index];
// }
// console.log(result);   

//// TASK 11. Daxil olunmuş sözdə neçə sait və samit olduğunu tapın;
// let saitler = ["a","ı","o","u","e","ə","i","ö","ü"];
// let samitler = ["q","r","t","y","p","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","ş","ğ","ç"];
// let soz="Fatime";
// soz=soz.toLowerCase();
// let sait_say=0;
// let samit_say=0;
// for (let index = 0; index < soz.length; index++) {
//    if (saitler.includes(soz[index])) {
//         sait_say++;
//    }
//    else if(samitler.includes(soz[index])){
//     samit_say++;
//    }
// }
// console.log(soz+" sozunde "+sait_say+" sait, "+samit_say+" samit herf var.");

//// TASK 12. Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan
////metod yaradın (Mükəmməl ədəd ədədin özündən başqa qalan bütün
////tam bölənlərinin cəmi özünə bərabər olan ədədə deyilir - məs:
////6=1+2+3; 28=1+2+4+7+14)

// let eded=28;
// let cem=0;
// for (let index = 1; index<eded; index++) {
//    if(eded%index==0){
//     cem+=index;
//    }
// }
// if(eded==cem){
//     console.log(eded+" ededi mukemmel ededdir.");
// }
// else{
//     console.log(eded+" ededi mukemmel eded deyil.");
// }

//// TASK 13. Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın
// let eded=456759467546438;
// let string_eded=eded.toString();
// let cem=0;
// for (let index = 0; index < string_eded.length; index++) {
// cem+=parseInt(string_eded[index]);
// }
// console.log(cem);

//// TASK 14. Substring metodunun işini yerinə yetirən funksiya yaradın;


//  function stringSub(cumle, startIndex, endIndex) {
//     let cumle_substr="";
//     if (!endIndex==undefined) {
//      for (let index = 0; index < cumle.length-1; index++) {
//     if(index>=startIndex && index<=endIndex){
//         cumle_substr+=cumle[index];
//     }}}
//     else{
//         for (let index = 0; index < cumle.length-1; index++) {
//             if(index>=startIndex){
//                 cumle_substr+=cumle[index];
//             }}
//     }
// return cumle_substr;
// }
// let cumle="Numune gostermek ucun cumle.";
// let startIndex=7;
// let endIndex;
// let result=stringSub(cumle,startIndex,endIndex);
// console.log(result);

//// TASK 15. indexOf metodunun işini yerinə yetirən funksiya yaradın.

// function indexOfSoz(cumle, soz,start_index) {
//     if(start_index!=undefined){
//         for (let i = start_index; i < cumle.length; i++) {
//             if (cumle.slice(i, i + soz.length) === soz) {
//                 return i;
//             }
//         }
//         return -1;
//     }
//     else{
//         for (let i = 0; i < cumle.length; i++) {
//             if (cumle.slice(i, i + soz.length) === soz) {
//                 return i;
//             }
//         }
//         return -1;
//     }
// }
// let cumle="Numune gostermek ucun cumle.";
// let soz="gostermek";
// let start_index=2;
// let netice = indexOfSoz(cumle, soz,start_index);
// console.log(netice);

//// TASK 16. 2 tarix arasındakı intervalı tapın. ( nəticə : 1 il 3ay 5 gün – formatında olmalıdı)
let ilk_tarix = new Date(2002, 10, 15);
let son_tarix = new Date(2024, 4, 7);
let il_ferqi=son_tarix.getFullYear()-ilk_tarix.getFullYear();
let ay_ferqi=son_tarix.getMonth()-ilk_tarix.getMonth();
let gun_ferqi=son_tarix.getDate()-ilk_tarix.getDate();
if (ay_ferqi<0) {
    il_ferqi--;
    ay_ferqi+=12;
}
if (gun_ferqi<0) {
    ay_ferqi--;
    let sonuncu_ay = new Date(son_tarix.getFullYear(), son_tarix.getMonth(), 0);
    gun_ferqi += sonuncu_ay.getDate();
    
}
console.log(il_ferqi+" il "+ay_ferqi+" ay  "+gun_ferqi+" gun ferq var");
