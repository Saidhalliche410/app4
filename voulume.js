class Said0{
    constructor(){
        this.musique=document.getElementById("musique");
        this.musique.volume=50/100;
        this.son=document.getElementById("son1");
        this.rapide=document.getElementById("rapidite");
        this.son.addEventListener("change",()=>{
            this.musique.volume=this.son.value/100 ;
        });
        this.rapide.addEventListener("change",()=>{
        this.musique.playbackRate=this.rapide.value/100;
        });
       
    }
}
onload=new Said0();
