let nameone=document.getElementById("name1");
let nametwo=document.getElementById("name2");
let next = document.getElementById("next");

next.addEventListener("click", () => {
  if (nameone.value!= "" && nametwo.value != "") {
    window.location.href='second.html';
    localStorage.setItem("firstPlayer", nameone.value);
    localStorage.setItem("secondPlayer", nametwo.value);
  }
  else{
    if(nameone.value== "" && nametwo.value== "")
    {
        alert("X and 0 ka naam to daal")
    }  
    else if(nameone.value== ""){
        alert("X ka Naam to daal")
    }
    else{
        alert("0 ka Naam to daal")
    }
}
});