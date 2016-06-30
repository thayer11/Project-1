window.onload=function() {
 
     function Card(side1, side2, a, b) {
        this.side1 = side1;
        this.side2 = side2;
        this.id = a;
        this.dataid = b;
     }
     var cardarray = [];

     cardarray[0] = new Card("ivory","images/images-1.jpg","a",0);
     cardarray[1] = new Card("ivory","images/images-1.jpg","b",1);
     cardarray[2] = new Card("ivory","images/images-2.jpg","c",2);
     cardarray[3] = new Card("ivory","images/images-2.jpg","d",3);
     cardarray[4] = new Card("ivory","images/images-3.jpg","e",4);
     cardarray[5] = new Card("ivory","images/images-3.jpg","f",5);
     cardarray[6] = new Card("ivory","images/images-4.jpg","g",6);
     cardarray[7] = new Card("ivory","images/images-4.jpg","h",7);
     cardarray[8] = new Card("ivory","images/images-5.jpg","i",8);
     cardarray[9] = new Card("ivory","images/images-5.jpg","j",9);
     cardarray[10] = new Card("ivory","images/images-6.jpg","k",10);
     cardarray[11] = new Card("ivory","images/images-6.jpg","l",11);
     cardarray[12] = new Card("ivory","images/images.jpg","m",12);
     cardarray[13] = new Card("ivory","images/images.jpg","n",13);
     cardarray[14] = new Card("ivory","images/imgres-1.jpg","o",14);
     cardarray[15] = new Card("ivory","images/imgres-1.jpg","p",15);
     cardarray[16] = new Card("ivory","images/imgres.jpg","q",16);
     cardarray[17] = new Card("ivory","images/imgres.jpg","r",17); 


    //Function Load Page 

    function TurnCard(event){
            var img = document.createElement("img");
            var clickedDiv = event.target;
            console.log(clickedDiv);
            img.setAttribute("height", "175px");
            img.setAttribute("width", "175px");
            img.setAttribute("src", cardarray[(clickedDiv).getAttribute("data-id")].side2);
            clickedDiv.appendChild(img);//Constructor:
    }//Objects=EachCard which exists in an array
    //properties:
    //sideOne: image
    //sideTwo: color
    //sideNothing:" "

    for (var i = 0; i < cardarray.length; i++){ 
    	   document.getElementById(cardarray[i].id).addEventListener("click", function(event){
           TurnCard(event);
        });
    }
    }//event listener on "Place Cards" button in HTML to trigger array referrring to Dom locations 
//gamesquare on gameboard 
   
//    Card.prototype = {
//     turn: function(event){
//      console.log("hi")
//      var compare = event.target;
//         if (this.side2==!this.side2){
//             this.side1;
//         }
//         else {
//             this.side2;
//         }
//      }  

// }



//event listener on Start Time var start=3 
//if time=0
//message "Sorry, you are probably great at other things" and run reset function
//else time runs

//each dom gamesquare event listener listens for click which triggers function turnOver
//turn over changes property of card object from sideOne to sideTwo 

//for loop to iterate through objects in array
//if EachCard sideTwo [0] || EachCard sideTwo[1]!= EachCard sideTwo[2] 
//then EachCard will go back to sideOne
//else EachCard sideTwo[1]===sideTwo[2]

//When EachCard in Array has a sideTwo == to EachCard sideTwo (when the array has been reduced to 8)
//game over 

//event listener in Reset if clicked property of card will be " ".








