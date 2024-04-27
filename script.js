
function ready() {
  document.querySelector("#inputText").addEventListener("input", inputEdit)
}

function inputEdit (e) {
  // console.log(e.data);
  text = document.querySelector("#inputText").value
  document.querySelector("#output").innerHTML = tekken8parse(text)
}

function tekken8parse(text){
  text_inputs = text.split(" ");
  text_inputs.length;
  arrayImages = ""
  text_inputs.forEach(input => {
    if (input != "") {
      arrayImages+=(textToImage(input))
    }
  });
  return arrayImages
}

function assign(key){
  switch (key) {
    case 'h':
      return "1";
      break;
    case 'u':
      return "2";
      break;
  
    default:
      return false;
      break;
  }
}

function textToImage(text) {
  return "<img src=\"img/"+text+".png\">"
}
