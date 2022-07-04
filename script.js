const display = document.getElementById('display-screen');

const buttons = Array.from(document.getElementsByClassName('btn-grid__item'));

buttons.map(button => {
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            default:
                display.innerText +=e.target.innerText;
        }
    })
});
console.log(buttons);

