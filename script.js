// refrence tobthe screen
var display=document.getElementById('screen')
//the decimal point
var decimal=document.getElementById('decimal');
//the clear button
var clear_btn=document.getElementById('clear');
//the equal button
var equal_btn=document.getElementById('equal');
//the number buttons
var numbers=document.getElementsByClassName('numbers');
// array 
var evalarray=[]
//the operattors
var operators=document.getElementsByClassName('operator')
var pendingval;
var displayval='0';
for (let i=0;i<numbers.length;i++){
  numbers[i].addEventListener('click',function update_display_value(event){
    var btntext=event.target.innerText;
    if(displayval=="0"){
      displayval=""
    }
    displayval +=btntext;
    display.innerText=displayval;
      
  })
  
}
function perform_operation(event){
  var operator_text=event.target.innerText;
  switch (operator_text){
    //if the operator value matches +
        case '+':
            //execute this
            //let the displayval be shifted to the pendingval
            pendingval=displayval;
            //then empty the displayval while the pendingval waits for its numerator
            displayval='';
            //add the operator to the array
            evalarray.concat('+');
            //now display the last entry to the screen
            display.innerText=displayval;
            //here the push method adds the two numbers
            evalarray.push(pendingval);
            evalarray.push('+');
            //break out of the switch if it matches the case
                    break;
        case '*':
          pendingval=displayval;
          displayval='0';
          evalarray.concat('*');
          display.innerText=displayval;
          evalarray.push(pendingval);
          evalarray.push('*');
        break;

        case '/':
          pendingval=displayval;
          displayval='0';
          evalarray.concat('/');
          display.innerText=displayval;
          evalarray.push(pendingval);
          evalarray.push('/');
        break;

        case '-':
          pendingval=displayval;
          displayval='0';
          evalarray.concat('-');
          display.innerText=displayval;
          evalarray.push(pendingval);
          evalarray.push('-');
        break;

        case'=':
         evalarray.push(displayval);
         var evaluation=eval(evalarray.join(''));
         displayval=evaluation+'';
         display.innerText=displayval;
         evalarray=[]
        break;
         default:
           break;

    }

}

for(let i=0; i<operators.length; i++){
  operators[i].addEventListener('click', perform_operation)
}
decimal.onclick=function(){
  if(!displayval.includes('.')){
    displayval +='.';
  }
  displayval.innerHtml=displayval
}
clear.onclick=function(){
  displayval='0';
  pendingval='';
  display.innerHTML=displayval;
  evalarray=[]
  
}


















