function genrategrid(rows,columns){
    for(let i=0;i<rows;i++){
        const row=document.createElement('div')
        row.classList.add('row')
        for(let j=0;j<columns;j++){
            const seat=document.createElement('div')
            seat.classList.add('seat')
            seat.textContent=j+1
            row.appendChild(seat)
        }
        document.querySelector('.seats').appendChild(row)
    }
}
genrategrid(10,10);