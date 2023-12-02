var inputText = document.getElementById("inputText")

function setData(text){
    inputText.value +=text
}
function calculate(){
    inputText.value= eval(inputText.value)
}
function clearfunc(){
    inputText.value= ""
}