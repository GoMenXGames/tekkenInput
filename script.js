let globalWrap = false;

function ready() {
  document.querySelector("#inputText").addEventListener("input", inputEdit);
  document.querySelector("input#globalWrap").addEventListener("change", inputEdit);
}



function inputEdit (e) {
  // console.log(e.data);
  globalWrap = document.querySelector("input#globalWrap").checked
  text = document.querySelector("#inputText").value;
  document.querySelector("#output").innerHTML = tekken8parse(text);
}

function tekken8parse(text){
  text_inputs = text.split(" ");
  // text_inputs.length;
  output = "" //Output
  textStarted = false;
  textArray = "";
  text_inputs.forEach(input => {
    if (input == "("){
      textStarted = true
    }
    else if (input == ")") {
      textStarted = false
    }
    else if ( globalWrap &&  input == ",") {
      output+= (textToImage(input)) + "<br/>" +(textToImage(input))
    }
    else if (input != "" && !textStarted) {
      output+=(textToImage(input))
    }
    else if (textStarted){
      output += "<div class='text'> "+input+" </div>"
    }
    

  });
  return output
}



function textToImage(text) {
  return "<img src=\"img/"+text+".png\">"
}
