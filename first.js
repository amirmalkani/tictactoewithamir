let nameone=document.getElementById("name1");
let nametwo=document.getElementById("name2");
let next = document.getElementById("next");

next.addEventListener("click",()=> {
  if (nameone.value!="" && nametwo.value!="") {
    window.location.href='second.html';
    localStorage.setItem("firstPlayer", nameone.value);
    localStorage.setItem("secondPlayer", nametwo.value);
  }
  else{
    if(nameone.value== "" && nametwo.value== "")
    {
        speak("X and 0 ka naam toh daal")
        alert("X and 0 ka naam toh daal")
    }  
      else if(nameone.value== ""){
        speak("X ka naam toh daal")
        alert("X ka Naam toh daal")
      }
      else{
      speak("0 ka naam toh daal")
        alert("0 ka Naam toh daal")
    }
}
});

const speak = (texts) => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = texts;
  window.speechSynthesis.speak(msg);
}
