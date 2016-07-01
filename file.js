window.onload=function() {
 
     function Card(side1, side2, a, b) {
        this.side1 = side1;
        this.side2 = side2;
        this.id = a;
        this.dataid = b;
     }
     var stateMemory = "";
     var cardarray = [];

     cardarray[0] = new Card("images/unnamed.png","images/images-1.jpg","a",0);
     cardarray[1] = new Card("images/unnamed.png","images/images-1.jpg","b",1);
     cardarray[2] = new Card("images/unnamed.png","images/images-2.jpg","c",2);
     cardarray[3] = new Card("images/unnamed.png","images/images-2.jpg","d",3);
     cardarray[4] = new Card("images/unnamed.png","images/images-3.jpg","e",4);
     cardarray[5] = new Card("images/unnamed.png","images/images-3.jpg","f",5);
     cardarray[6] = new Card("images/unnamed.png","images/images-4.jpg","g",6);
     cardarray[7] = new Card("images/unnamed.png","images/images-4.jpg","h",7);
     cardarray[8] = new Card("images/unnamed.png","images/images-5.jpg","i",8);
     cardarray[9] = new Card("images/unnamed.png","images/images-5.jpg","j",9);
     cardarray[10] = new Card("images/unnamed.png","images/images-6.jpg","k",10);
     cardarray[11] = new Card("images/unnamed.png","images/images-6.jpg","l",11);
     cardarray[12] = new Card("images/unnamed.png","images/images.jpg","m",12);
     cardarray[13] = new Card("images/unnamed.png","images/images.jpg","n",13);
     cardarray[14] = new Card("images/unnamed.png","images/imgres-1.jpg","o",14);
     cardarray[15] = new Card("images/unnamed.png","images/imgres-1.jpg","p",15);
     cardarray[16] = new Card("images/unnamed.png","images/imgres.jpg","q",16);
     cardarray[17] = new Card("images/unnamed.png","images/imgres.jpg","r",17); 


    function TurnCard(event){
            var clickedDiv = event.target;
            var clickedCard = cardarray[(clickedDiv).getAttribute("data-id")];
            clickedDiv.style.backgroundImage = "url('" + clickedCard.side2+"')";
            if(stateMemory !==clickedCard){
            if (stateMemory===""){
                stateMemory=clickedCard;
            }else {
                Match(stateMemory, clickedCard);
                stateMemory="";     
            }
}
    }
    for (var i = 0; i < cardarray.length; i++){ 
    	   document.getElementById(cardarray[i].id).addEventListener("click", function(event){
           TurnCard(event);
        });
    }
    
    function Match(firstCard, secondCard){
            if (firstCard.side2!==secondCard.side2){
                setTimeout(function(){
                    TurnBack(firstCard);
                    TurnBack(secondCard);},1000)
            }
           
    }

    function TurnBack(firstCard){
            var CardDiv = document.getElementById(firstCard.id);
            CardDiv.style.backgroundImage = "url('" + firstCard.side1+"')";
            
    }

document.getElementById("startover").addEventListener("click", function(){
   for(var i=0; i<cardarray.length; i++){
        TurnBack(cardarray[i]);
   } 
        stateMemory="";
});
}
  

 








