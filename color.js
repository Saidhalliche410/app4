class Saido{
    constructor(){
        this.colorone=document.getElementById("color1");
        this.colortwo=document.getElementById("color2");
        this.colorthree=document.getElementById("color3");
        this.colorfour=document.getElementById("color4");
        this.colorfive=document.getElementById("color5");
        this.colorone.addEventListener("click",()=>{
        this. chngercouleur("colorone");
        });
        this.colortwo.addEventListener("click",()=>{
            this. chngercouleur("colortwo");
        });
        this.colorthree.addEventListener("click",()=>{
            this. chngercouleur("colorthree");
        });
        this.colorfour.addEventListener("click",()=>{
            this. chngercouleur("colorfour");
        });
        this.colorfive.addEventListener("click",()=>{
            this. chngercouleur("colorfive");
        });
        if(localStorage.getItem("color")!=null){
           this.chngercouleur(localStorage.getItem("color"));

        }
       

    }
    chngercouleur(color){
        if(color=="colorone"){ 
            document.body.style.background="#2d328847";
    }
   else if(color=="colortwo"){ 
        document.body.style.background="#63ff3047";
}
 else if(color=="colorthree"){ 
    document.body.style.background="#ffb32c47";
}
 else if(color=="colorfour"){ 
    document.body.style.background="#ff023f47";
}
else if(color=="colorfive"){ 
    document.body.style.background="#b0a34a";
}
localStorage.setItem("color",color);
}
}
onload=new Saido();
// try {

    
// } catch (error) {
//      console.error(error);
//      alert("erreur")
// }
