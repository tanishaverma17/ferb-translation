var btnTranslate = document.querySelector("#btn");
var text = document.querySelector("#text");  
var OutputDiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslation(text){
    return serverURL +"?" + "text="+text;
}

function errorHandler(error){
    console.log("Error occured:" + error)
} 

function clickHandler(){
    var InputText = text.value; //taking input
    //calling server for processing
    fetch(getTranslation(InputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated; 
        OutputDiv.innerText = translatedText;
        console.log(json.contents.translated)
    })
    .catch(errorHandler)
}
// OutputDiv.innerText = "Tanisha Verma"; //output
btnTranslate.addEventListener("click", clickHandler);