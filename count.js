let textarea=document.getElementById("textarea");
let word=document.getElementById("word");
let char=document.getElementById("char");
textarea.addEventListener("input",function(){
    let text=this.value;
    char.innerHTML=text.length;
    let newText = text.split(" ");
    newText = newText.filter(function(elm)
    {
        return elm!="";
    })
    word.innerHTML=newText.length;
})