let header = document.querySelector('.js-header');
let home = document.querySelector('.main__title');

let options = {
    rootMargin: '-100px',
    // threshold: 1.0
}

let observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('nav-scrolled');
        }
        else{
            header.classList.remove('nav-scrolled');
        }
        
    });

}, options);

observer.observe(home);

/* getting form data*/

// document.querySelector('.form__button').addEventListener('click', ()=>{

//     let name = document.querySelector('#name');
//     let email = document.querySelector('#email');
//     let subject = document.querySelector('#menssage');

//     if(!name.value){
//         name.focus();
//     } 
//     else if (!email.value){
//         email.focus();
//     }
//     else if(!subject.value){
//         subject.focus();
//     }
//     else{
//         console.log(`${name.value} ${email.value} ${subject.value}`);
//         name.value='';
//         email.value='';
//         subject.value="";
//     }


// });