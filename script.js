console.log("Hello");
const seats=document.getElementsByClassName("seats");
let seat_count=document.getElementById("b");
let seat_left=document.getElementById("a");
let total=document.getElementById("total");
let input=document.getElementById("coupon");
let apply_button=document.getElementById("apply");
let grand_total=document.getElementById("grand-total");
let coupon_section=document.getElementById("d");
let success=document.getElementById("success");
let purchase=document.getElementById("purchase");

let count=0;
let left=16;

for(const seat of seats)
{
    seat.addEventListener("click",(event)=>{
    
    if(seat.classList.contains("bg-white"))
    {
    seat.classList.add("bg-green-600");
    seat.classList.remove("bg-white")
    let info=document.getElementById("container")
     li=document.createElement('li');
     count++;
     left--;
     seat_left.innerText=`${left}`;
     seat_count.innerText=`${count}`;
     total.innerText=`${count*550}`;
     li.innerText=`${seat.innerText} Economy 550tk`;
     li.style.wordSpacing = "65px";
     info.appendChild(li);
    }


    });
}

let string=input.value;
input.addEventListener("input", () => {
    let string = input.value;
    if (string === "NEW15" || string === "Couple20") {
        apply_button.classList.remove("btn-disabled");
    } else {
        apply_button.classList.add("btn-disabled");
    }
});

apply_button.addEventListener("click",(event)=>{

    console.log(input.value);
    coupon_section.classList.add("hidden");
    success.classList.remove("hidden");
    if(input.value==="NEW15"){
      grand_total.innerText=`${ count*550 - (count*550)*0.15}`;
    }
    else{
        grand_total.innerText=`${count*550 - (count*550)*0.20}`;
    }
});
purchase.addEventListener("click",function(event){
  
})