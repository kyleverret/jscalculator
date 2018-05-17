var nums = "0";
var opNext = "";
var firstNum = "";
var lastEntry = "";


function inNum(indNum){
    lastEntry = "num";
if (nums.length == 1 && nums =="0"){
    nums =  indNum.toString();
    document.getElementById("displayS").innerHTML = nums;
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
    if (opNext != "" && nums == ""){
        opNext = opR;
    }
    else{
    if (opNext != ""){
        nums = findTotal();
        document.getElementById("displayS").innerHTML = nums;
    firstNum = "";}
opNext = opR;
    firstNum = parseFloat(nums);
    nums = "";
    }
    }

function clearAll(){
    nums = "0";
    opNext = "";
    lastEntry = "";
    document.getElementById("displayS").innerHTML = nums;
}

function clearLast(){
    switch (lastEntry){ 
        case lastEntry = "num":
            console.log("trying!!");
            nums = nums.slice(0, nums.length-1);
            if (nums == ""){nums = "0";}
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

function porCiento(){
    nums = nums/100;
    document.getElementById("displayS").innerHTML = nums;
}