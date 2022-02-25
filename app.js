'use strict';

var one = document.getElementById("one");
var two = document.getElementById("two");

two.readOnly = "true";

var selectOne = document.querySelector("#select_one");
var selectTwo = document.querySelector("#select_two");

// console.log(selectOne.value);
// console.log(selectTwo.value);

var oneSelect = parseFloat( selectOne.value);
var twoSelect = parseFloat(selectTwo.value);

const btn = document.querySelector("#submit");
var towValue;


switch (oneSelect){
        case 1:     
                    var oneValue = parseFloat(one.value);
                    if( twoSelect==1){
                        towValue = one.value;
                    }else if(twoSelect==2){
                        two.type="text";
                        towValue = oneValue.toString(16);
                        console.log(towValue);
                    }else if( twoSelect==3){
                        towValue = oneValue.toString(8);
                    }else{
                        towValue = oneValue.toString(2);
                    }
                    break;
        
        case 2:     
                    one.type= "text";
                    var oneValue = one.value;
                    // console.log(oneValue);
                    var oneValue_integer = parseInt(oneValue,16);
                    // console.log(oneValue_integer);

                    if(twoSelect==1){
                        towValue = oneValue_integer;
                    }else if( twoSelect==2){
                        two.type="text";
                        towValue= oneValue;
                    }else if(twoSelect==3){
                        towValue = oneValue_integer.toString(8);
                    }else{
                        towValue = oneValue_integer.toString(2);
                    }
                    break;


        case 3:     
                    var oneValue = (one.value);

                    if( twoSelect==1){
                        towValue = parseInt(oneValue,8);
                    }else if(twoSelect==2){
                        var oneValue_integer = parseInt(oneValue,8);
                        two.type="text";
                        towValue = oneValue_integer.toString(16);
                    }else if( twoSelect==3){
                        towValue = oneValue;
                    }else{
                        var oneValue_integer = parseInt(oneValue,8);
                        towValue = oneValue_integer.toString(2);
                    }
                    break;

        case 4:     
                    var oneValue = (one.value);
                    if( twoSelect==1){
                        towValue = parseInt(oneValue,2);
                    }else if(twoSelect==2){
                        oneValue_integer = parseInt(oneValue,2);
                        two.type="text";
                        towValue = oneValue_integer.toString(16);
                    }else if( twoSelect==3){
                        oneValue_integer = parseInt(oneValue,2);   
                        towValue = oneValue_integer.toString(8);
                    }else{
                        towValue = oneValue;
                    }
                    break;

}




btn.addEventListener("click", ()=>{
    
    if(one.value==""){
        alert("enter value");
        return;
    }
    two.value= towValue;
    // console.log(towValue);
    
})


const btn_btn = document.querySelector("#btn");

btn_btn.addEventListener("click", ()=>{
  
    var temp = one.value;
    one.value = two.value;
    two.value = temp;
    
    var dummy= selectOne.value;
    selectOne.value = selectTwo.value;
    selectTwo.value = dummy;
})

const re = document.getElementById("refresh");
re.addEventListener("click", ()=>{
    one.value="";
    two.value="";
})