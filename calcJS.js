var nums = "";
var opNext = "";
var firstNum = "";


function inNum(indNum){
if (nums.length == 1 && nums =="0"){
    nums =  indNum.toString();
    displayX.innerHTML = nums;
}
    else{
      nums =  nums.concat(indNum);
    document.getElementById("displayS").innerHTML = nums;
    }
}


function addDeci(){
    if (nums.indexOf(".") == -1){
        console.log('trying to add deci!');
    nums = nums.concat(".");
    document.getElementById("displayS").innerHTML = nums;
    }
    }


function nextOp(opR){
    if (opNext != ""){
        nums = findTotal();
        document.getElementById("displayS").innerHTML = nums;
    firstNum = "";}
opNext = opR;
    firstNum = parseFloat(nums);
    nums = "";
}

function clearAll(){
    nums = "";
    opNext = "";
    document.getElementById("displayS").innerHTML = nums;
}

function equals(){
    nums = findTotal();
    document.getElementById("displayS").innerHTML = nums;
    firstNum = "";
    opNext = "";
}

function findTotal(){
    var secNum = parseFloat(nums);
    switch (opNext){
        case opNext = "splitIt":
         return firstNum / secNum;
        case opNext = "multIt":
          return firstNum * secNum;
        case opNext = "subIt":
            return firstNum - secNum;
        case opNext = "addIt":
            return firstNum + secNum;
    }
}