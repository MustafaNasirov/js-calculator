const display = document.getElementById('input-grid__display');

const buttons = Array.from(document.getElementsByClassName('btn-grid__item'));

buttons.map(button => {
    button.addEventListener('click', (e) =>{
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
    })
});
console.log(buttons);

