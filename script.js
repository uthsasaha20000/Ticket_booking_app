console.log("Hello");
const seats=document.getElementsByClassName("seats");
let seat_count=document.getElementById("b");
let seat_left=document.getElementById("a");
let count=0;
let left=16;

for(const seat of seats)
{
    seat.addEventListener("click",(event)=>{
    
    if(seat.classList.contains("bg-white"))
    {
    seat.style.backgroundColor="red";
    seat.classList.remove("bg-white")
    let info=document.getElementById("container")
     li=document.createElement('li');
     count++;
     left--;
     seat_left.innerText=`${left}`;
     seat_count.innerText=`${count}`;
     li.innerText=`${seat.innerText}  Ecconomy  550tk`;
     li.style.wordSpacing = "65px";
     info.appendChild(li);
    }


    });
}
