class Said{
    constructor(){
        // var main1=document.getElementById("said1");
        // main1.style.height=screen.height+"px";
// if(screen.width<=500){
// main1.style.width=screen.width+"px";
// // main1.style.height=screen.height+"px"
// }
var var2=document.getElementById("said1");
var2.style.height=screen.height+"px";
    }
}
// alert(screen.height)
onload=new Said();
//new class
 
class Said2{
    constructor() {
        this.musique=document.getElementById("musique");
        this.titre =document.getElementById("title");
        this.backend =document.getElementById("backend");
        this.playend =document.getElementById("playend");
        this.nextend =document.getElementById("nextend");
        this.ispalyed=false;
       

        
        this.names=[];
        this.names[0]="Chanson 1";
        this.names[1]="Chanson 2";
        this.names[2]="Chanson 3";
        this.names[3]="Chanson 4";
        this.names[4]="Chanson 5";
        this.srcradio=[];
        this.srcradio[0]="images/Gangsta_s Paradise - Lofi Fruits Music [TikTok Remix] [Extended](MP3_70K).mp3";
        this.srcradio[1]="images/Sade - Smooth Operator (Remix House) (Lyrics)(M4A_128K).m4a";
        this.srcradio[2]="images/Imagine Dragons x JID - Enemy (Lyrics)(M4A_128K).m4a";
        this.srcradio[3]="images/Madcon - Beggin(MP3_70K).mp3";
        this.srcradio[4]="images/OMI - Cheerleader (Felix Jaehn Remix) (Lyrics)(M4A_128K).m4a";
        this.server=0;
       
        this.okay();
        backend.addEventListener("click",()=>{
                 
                  
                  this.musique.play();    
                  this.back1(); 
                  this.okay();
        });
        playend.addEventListener("click",()=>{
            this.play1();
        })
        nextend.addEventListener("click",()=>{
           
                 
                  this.next1();
                  this.ispalyed=false;
                  this.okay();
            
        })
       
        
    }
   

    okay(){
        if(localStorage.getItem("gta")!=null){
            this.server= localStorage.getItem("gta");
         }    
        this.musique.src=this.srcradio[this.server];
        this.titre.innerHTML=this.names[this.server];  
            
    }

    play1(){
        if(this.ispalyed==false){
            this.playend.src="images/play.png"
            this.musique.play();
            this.ispalyed=true;
        }else if(this.ispalyed==true){ 
            this.musique.pause();
        this.playend.src="images/pause.png"
        this.ispalyed=false;
       
        }
    }
    next1(){
       if(this.server<this.srcradio.length-1){
        this.server++;
       }else{
            this.server=0;
       }
       localStorage.setItem("gta",this.server);
       
        
    }
    back1(){
        this.musique.src=this.srcradio[this.server];
        this.titre.innerHTML=this.names[this.server];
        if(this.server>0){ 
        this.server=this.server-1;
        
    }else{
        this.server=this.srcradio.length-1;

    }
    
     this.ispalyed=false;
     localStorage.setItem("gta",this.server);
     
    }
}
onload=new Said2();