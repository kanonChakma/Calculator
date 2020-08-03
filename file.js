function getHistory() {
    return document.getElementById('history-value').innerText;
}
// alert(getHistory());
function printHistory(num) {
    document.getElementById('history-value').innerText=num;
}
// printHistory('345');
function getOutput() {
    return document.getElementById('output-value').innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById('output-value').innerText=num;
    }
    else
    {
    document.getElementById('output-value').innerText=getFormattedNumber(num);
   }
}
//this function generate comma
function getFormattedNumber(num)
{
  if(num=='-')
  {
    return "";
  }
  var n=Number(num);
  var value=n.toLocaleString("en");
  return value;
}
// printOutput("9999999");
function toResverseNumber(num) {
    return Number(num.replace(/,/g,''));
}
// alert(toResverseNumber(getOutput()));
var operator=document.getElementsByClassName("operator");

for (var i = 0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
       if (this.id=="clear") {
          printOutput("");
          printHistory("");
       }
       else if(this.id=="backspace")
       {
         var output=toResverseNumber(getOutput()).toString();
         if(output)
         {
            output=output.substr(0,output.length-1);
            printOutput(output);
         }
       }
       else{
        var output=getOutput();
        var history=getHistory();
        if(output!="")
        {
            output=toResverseNumber(output);
            history=history+output;
            if(this.id=="=")
            {
                var result=eval(history);
                printOutput(result);
                printHistory("");
            }
            else
            {
                history=history+this.id;
                printHistory(history);
                printOutput("");
            }
         }
       }
    })
}
var number=document.getElementsByClassName("number");

for (var i = 0; i<number.length; i++){
       number[i].addEventListener('click',function(){
         var result=toResverseNumber(getOutput());
         if(result!=NaN)
         {
            result=result+this.id;
            printOutput(result);
         }  
    })
}