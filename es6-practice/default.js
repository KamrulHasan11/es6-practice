function add(num1, num2 = 20){
    // if(num2 == undefined){
    //     num2 = 0;
    // }

    // num2 = num2 || 20;
    
    return num1 + num2;
};
const addResult = add(17, 3);
console.log(addResult);