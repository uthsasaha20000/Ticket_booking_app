console.log("Hello");
const seats=document.getElementsByClassName("seats");
//const seat_count=document.getElementById("sit_count");
//const seat_left=document.getElementsById("sit_left");
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
     li.innerText=`You selected ${seat.innerText}, seat left ${left}, Seat Selected${count}`;
     info.appendChild(li);
    }


    });
}
