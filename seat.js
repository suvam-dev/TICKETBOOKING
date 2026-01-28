const setsReserver=[];
const selectedSeats=[];
function genrategrid(rows,columns){
    for(let i=0;i<rows;i++){
        const row=document.createElement('div')
        row.classList.add('row')
        row.innerHTML=`<div class="seat" style=" padding:20px; margin:0px; background-color:transparent; justify-content: center; align-items: center;">${String.fromCharCode('A'.charCodeAt(0) + i)}</div>`
        for(let j=0;j<columns;j++){
            const seat=document.createElement('div')
            seat.classList.add('seat')
            seat.addEventListener('click',seatclick)
            seat.dataset.productID=` ${String.fromCharCode('A'.charCodeAt(0) + i)}${j+1}`;
            seat.textContent=seat.dataset.productID;
            row.appendChild(seat)
        }
        document.querySelector('.seats').appendChild(row)
    }
}
genrategrid(10,10);
function seatclick(){
    const seat=this;
    if(seat.classList.contains('selected')){
        seat.classList.remove('selected');
        this.style.backgroundColor='yellow';
        selectedSeats.splice(selectedSeats.indexOf(seat),1);
    }else{
        seat.classList.add('selected');
        this.style.backgroundColor='green';
        selectedSeats.push(seat);
    }  
    updateSelectedCount(); 
}
function updateSelectedCount(){
    document.querySelector('.selectedSeats').innerHTML='';
    selectedSeats.forEach(seat=>{
            document.querySelector('.selectedSeats').innerHTML+=seat.dataset.productID+' ';
            document.querySelector('.total').innerHTML=selectedSeats.length*100;
    })
}
    document.querySelector(".submit").addEventListener("click",()=>{
        const submit=document.querySelector(".submit");
       submit.style.backgroundColor="green";
       submit.style.color="white";
       submit.style.border="none";
       submit.style.borderRadius="5px";
       submit.style.cursor="pointer";
       submit.style.zIndex="100";
       submit.style.position="fixed";
       submit.style.top="50%";
       submit.style.left="50%";
       submit.style.transform="translate(-50%,-50%)";
       submit.style.width="100%";
       submit.style.height="100%";
       submit.style.overflow="hidden";
    });
