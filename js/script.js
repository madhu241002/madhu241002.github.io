function Showflex(){
    k = document.getElementById("flex1").style.display;
    if(k=="none"){
      document.getElementById("flex1").style.display = "flex";
      document.getElementById("flex-show").style.display="none";
      document.getElementById("flex-hide").style.display="block";
      document.getElementById("preflex1").style.display="none";
    }
    else{
        document.getElementById("flex1").style.display = "none";
        document.getElementById("flex-show").style.display="block";
        document.getElementById("flex-hide").style.display="none";
        document.getElementById("preflex1").style.display = "flex";
    }
} 
function Showflex2(){
    k = document.getElementById("flex2").style.display;
    if(k=="none"){
    document.getElementById("flex2").style.display = "flex";
    document.getElementById("flex-show-2").style.display="none";
    document.getElementById("flex-hide-2").style.display="block";
    document.getElementById("preflex2").style.display="none";
    }
    else{
        document.getElementById("flex2").style.display = "none";
        document.getElementById("flex-show-2").style.display="block";
        document.getElementById("flex-hide-2").style.display="none";
        document.getElementById("preflex2").style.display = "flex";
    }
} 