// let colors = ["red", "green", "black", "white","blue","yellow"];
// let premiere, deuxieme, troisieme, quatrieme;

// const shuffle = ( listColors) => {
//     let tmp = new Array(listColors.length);
//     let result = [];
//     let number = 1;
//     let index;
//     premiere = "";
//     deuxieme = "";
//     troisieme = "";
//     quatrieme = "";
//     while( result.length !== listColors.length * 2){

//         index = Math.floor(Math.random() * listColors.length);
//         if (tmp[index] === undefined || tmp[index] < 2){
//             if(tmp[index] === undefined){
//                 tmp[index] = 1;
//             }else {
//                 tmp[index]++;
//             }
//             result.push(listColors[index]);
//             document.getElementById( + number).style.backgroundColor = listColors[index];
//             number++
//         }
//     }
//     return result
// }