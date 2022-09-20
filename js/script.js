var head1 =document.querySelector('.heading');
var para =document.querySelector('#p');

// head1.style.color="blue";
// para.style.backgroundColor="yellow";
 
// p.Id='P'; 
// console.log(head1.Id);
// head1.classList.add('active');


var paragraphs =document.querySelectorAll('p');
var btn=document.querySelector('button')

function clickButton(){
    for (let p of paragraphs){p.classList.toggle('active')}
}
 
btn.addEventListener("click",clickButton)
// console.log(paragraphs)
// for (let p of paragraphs){p.classList.add('active')}
// for (let i in paragraphs )
// {paragraphs[i].classList.add('active')};