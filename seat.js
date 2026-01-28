const setsReserver=[];
const selectedSeats=[];
function genrategrid(rows,columns){
    for(let i=0;i<rows;i++){
        const row=document.createElement('div')
        row.classList.add('row')
        for(let j=0;j<columns;j++){
            const seat=document.createElement('div')
            seat.classList.add('seat')
            seat.addEventListener('click',seatclick)
            seat.textContent=j+1
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
            document.querySelector('.selectedSeats').innerHTML+=seat.textContent+' ';
    })


}