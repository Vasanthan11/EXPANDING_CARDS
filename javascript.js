let panels = document.querySelectorAll('.panel');

function removeActive(){
    panels.forEach((change)=>{
        change.classList.remove('active')
    })
}
panels.forEach((change) =>{
    change.addEventListener('click', ()=>{
        removeActive();
        change.classList.add('active');
    })
})

