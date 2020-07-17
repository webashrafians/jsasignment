// feetToMile ...................
function feetToMile(feet){
    var mile = (feet / 3) / 1760; // 1760 yard equal 1 mile
    mile = mile.toFixed(2);
    return mile;
}
var miles = feetToMile(29030); //mount everest height
console.log(miles, " miles");
console.log(".................. end feetToMile");

// woodCalculator ................
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;

    return totalWood;
}
var totalWood = woodCalculator(15,5,4);
console.log(totalWood, " cft");
console.log(".................. end woodCalculator");

// brickCalcualtor ...............
function brickCalcualtor(floor){
    var floor10 = floor * 1000;
    var floor10plus = floor10 + (floor - 10) * 1200;
    if(floor <=10){
        console.log(floor10);
    } else{
        console.log(floor10plus);
    }
}
console.log(brickCalcualtor(11));
console.log(".................. end brickCalculator");

//tinyFriend .....................
function tinyFriend(name){
    var name = ["Jamal", "Rofique", "Tammana", "Toufique", "Tigger", "Ashraful", "NusratAra"];
    var nameCheck = name[0];
        for(var i = 0; i < name.length; i++){
            var bigName = name[i];
            if(bigName > nameCheck){
                nameCheck = bigName;
            }
        }
        return nameCheck;
}
var bigName = tinyFriend();
console.log(bigName);
console.log(".................. end tinyFriend");