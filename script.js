let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let text1=document.getElementById("text1");
let text2=document.getElementById("text2");
let text3=document.getElementById("text3");
let incriment=3;
let guide=document.querySelector("#textToDisplay");
let cardContainer=document.querySelector(".cardContainer");
let guidArray=["Choose a Card and press Done","In Which Set Your Card is","Now in which set it is","For the Last time which set it is"]
counter=0;
guideCounter=0;


let set1=[];
let set2=[];
let set3=[];






//Card Section

let url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
        let deckID;
        let cardDetails = [];
        let container1 = document.querySelector(".container1");
        let dataCardDetail;
        let showCard=document.querySelector("#Show-Card");

        async function fetchCards(url) {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            deckID = data.deck_id;
            return deckID;
        }

        async function freshDeck(id) {
                const response = await fetch(`https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=21`);
                const data = await response.json();
               
                
                for(i=0;i<=20;i++){
                    cardDetails.push(`<img src="${data.cards[i].image}" class="card-image" >`)
                }
                console.log(cardDetails);
                for(i=0;i<=20;i++){
                    container1.innerHTML+=(cardDetails[i]);
                }
                
                 
        }


//Card Section


function Start(){
 
    fetchCards(url).then(deckID=>freshDeck(deckID));
    guide.style.display="block";
    guide.innerText=guidArray[guideCounter];
    guideCounter+=1;
    document.querySelector("#done").style.display="block";
    document.querySelector("#start").style.display="none";
    
}




function Done(){
        set1=cardDetails.slice(0, 7);
        set2=cardDetails.slice(7, 14);
        set3=cardDetails.slice(14, 21);

        for(i=0;i<=6;i++){
            text1.innerHTML+=(set1[i]);
            text2.innerHTML+=(set2[i]);
            text3.innerHTML+=(set3[i]);
        }
        container1.style.display="none";
        guide.innerText=guidArray[guideCounter];
        guideCounter+=1;
        document.querySelector("#btn1").style.display="block";
    document.querySelector("#btn2").style.display="block";
    document.querySelector("#btn3").style.display="block";
    document.querySelector("#done").style.display="none";

}


function btnPressed(btnValue){

    if(btnValue===1){
        guide.innerText=guidArray[guideCounter];
        guideCounter+=1;
        text1.innerHTML="";
        text2.innerHTML="";
        text3.innerHTML="";
        cardDetails=set2.concat(set1,set3);
        shuffle()
        
        for(i=0;i<=6;i++){
            text1.innerHTML+=(set1[i]);
            text2.innerHTML+=(set2[i]);
            text3.innerHTML+=(set3[i]);
        }
        counter+=1;
        if(counter===3){
            document.querySelector(".cardContainer").style.display="none";
            showCard.style.display="block"
            document.querySelector("#btn1").style.display="none";
            document.querySelector("#btn2").style.display="none";
            document.querySelector("#btn3").style.display="none";
            document.querySelector("#done").style.display="none";
            document.querySelector("#textToDisplay").style.display="none";
            showCard.innerHTML="<h1>You Choose</h1>"+cardDetails[10]+`<br><button onclick="reset()" id="reset">Reset</button>`;
        }
    }
    else if(btnValue===2){
        guide.innerText=guidArray[guideCounter];
        guideCounter+=1;
        text1.innerHTML="";
        text2.innerHTML="";
        text3.innerHTML="";
        cardDetails=set1.concat(set2,set3);
        shuffle()
        for(i=0;i<=6;i++){
            text1.innerHTML+=(set1[i]);
            text2.innerHTML+=(set2[i]);
            text3.innerHTML+=(set3[i]);
        }
        counter+=1;
        if(counter===3){
            document.querySelector(".cardContainer").style.display="none";
            showCard.style.display="block"
            document.querySelector("#btn1").style.display="none";
            document.querySelector("#btn2").style.display="none";
            document.querySelector("#btn3").style.display="none";
            document.querySelector("#done").style.display="none";
            document.querySelector("#textToDisplay").style.display="none";
            showCard.innerHTML="<h1>You Choose</h1>"+cardDetails[10]+`<br><button onclick="reset()" id="reset">Reset</button>`;
        }
    }
    else{
        guide.innerText=guidArray[guideCounter];
        guideCounter+=1;
        text1.innerHTML="";
        text2.innerHTML="";
        text3.innerHTML="";
        cardDetails=set1.concat(set3,set2);
        shuffle()
        for(i=0;i<=6;i++){
            text1.innerHTML+=(set1[i]);
            text2.innerHTML+=(set2[i]);
            text3.innerHTML+=(set3[i]);
        }
        counter+=1;
        if(counter===3){
            document.querySelector(".cardContainer").style.display="none";
            showCard.style.display="block"
            document.querySelector("#btn1").style.display="none";
            document.querySelector("#btn2").style.display="none";
            document.querySelector("#btn3").style.display="none";
            document.querySelector("#done").style.display="none";
            document.querySelector("#textToDisplay").style.display="none";
            showCard.innerHTML="<h1>You Choose</h1>"+cardDetails[10]+`<br><button onclick="reset()" id="reset">Reset</button>`;
        }
    }

}





function shuffle(){
    set1=[];
    set2=[];
    set3=[];
    cardDetails.forEach((number, index) => {
        if (index % 3 === 0) {
            set1.push(cardDetails[index]);
        } else if (index % 3 === 1) {
            set2.push(cardDetails[index]);
        } else {
            set3.push(cardDetails[index]);
        }
    });
    
    
    
}

function reset(){
     window.location.reload();


    
}