var nums = "";
var opNext = "";
var firstNum = "";
var lastEntry = "";


function inNum(indNum){
    lastEntry = "num";
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
    lastEntry = "num";
    if (nums.indexOf(".") == -1){
        console.log('trying to add deci!');
    nums = nums.concat(".");
    document.getElementById("displayS").innerHTML = nums;
    }
    }


function nextOp(opR){
    lastEntry = "opr";
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
    lastEntry = "";
    document.getElementById("displayS").innerHTML = nums;
}

function clearLast(){
    console.log(lastEntry);
    switch (lastEntry){
        case lastEntry = "num":
            console.log("trying!!");
            nums = nums.slice(0, nums.length-1);
            document.getElementById("displayS").innerHTML = nums;
            break;
        case lastEntry = "opr":
            opNext = "";
            break;
    }
}

function equals(){
    nums = findTotal();
    document.getElementById("displayS").innerHTML = nums;
    firstNum = "";
    opNext = "";
    lastEntry = "";
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